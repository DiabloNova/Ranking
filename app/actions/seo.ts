'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { seoAnalysis } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { v4 as uuidv4 } from 'uuid'
import * as cheerio from 'cheerio'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('غیر مجاز')
  return session.user.id
}

export async function analyzeWebsite(websiteUrl: string) {
  const userId = await getUserId()

  // Parse URL
  let parsedUrl: URL
  try {
    parsedUrl = new URL(websiteUrl)
  } catch {
    throw new Error('URL نامعتبر است')
  }

  // Fetch website
  let htmlContent: string
  try {
    const response = await fetch(websiteUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 10000,
    })
    if (!response.ok) throw new Error('نمی‌تواند وب‌سایت را بارگذاری کند')
    htmlContent = await response.text()
  } catch (error) {
    throw new Error('نمی‌تواند وب‌سایت را دسترسی کند')
  }

  // Parse HTML
  const $ = cheerio.load(htmlContent)

  // Extract metadata
  const title = $('title').text() || ''
  const metaDescription = $('meta[name="description"]').attr('content') || ''
  const metaKeywords = $('meta[name="keywords"]').attr('content') || ''

  // Count headings
  const h1Count = $('h1').length
  const h2Count = $('h2').length
  const h3Count = $('h3').length

  // Check images alt text
  const images = $('img')
  let imagesWithAlt = 0
  images.each((_, img) => {
    if ($(img).attr('alt')) imagesWithAlt++
  })
  const imageAltPercentage = images.length > 0 ? (imagesWithAlt / images.length) * 100 : 0

  // Count links
  const links = $('a')
  let internalLinks = 0
  let externalLinks = 0

  links.each((_, a) => {
    const href = $(a).attr('href') || ''
    if (href.startsWith('/') || href.includes(parsedUrl.hostname)) {
      internalLinks++
    } else if (href.startsWith('http')) {
      externalLinks++
    }
  })

  // Check SSL
  const hasSsl = parsedUrl.protocol === 'https:'

  // Check mobile viewport
  const viewportMeta = $('meta[name="viewport"]')
  const isMobileReady = viewportMeta.length > 0

  // Calculate score (0-100)
  let score = 50
  if (title.length > 0) score += 5
  if (title.length >= 30 && title.length <= 60) score += 5
  if (metaDescription.length > 0) score += 5
  if (metaDescription.length >= 120 && metaDescription.length <= 160) score += 5
  if (h1Count === 1) score += 5
  if (h2Count > 0) score += 5
  if (imageAltPercentage > 80) score += 5
  if (internalLinks > 0) score += 5
  if (hasSsl) score += 5
  if (isMobileReady) score += 5

  const analysisRecord = {
    id: uuidv4(),
    userId,
    website: websiteUrl,
    title,
    description: metaDescription,
    keywords: metaKeywords,
    headings: JSON.stringify({ h1: h1Count, h2: h2Count, h3: h3Count }),
    pageSpeed: null,
    mobileReady: isMobileReady,
    sslCertificate: hasSsl,
    metaTags: JSON.stringify({
      charset: $('meta[charset]').attr('charset'),
      viewport: viewportMeta.attr('content'),
    }),
    imageAlt: imageAltPercentage > 80,
    internalLinks,
    externalLinks,
    score: Math.min(100, score),
  }

  await db.insert(seoAnalysis).values(analysisRecord)
  revalidatePath('/dashboard')

  return analysisRecord
}

export async function getAnalysisHistory() {
  const userId = await getUserId()
  const analyses = await db.query.seoAnalysis.findMany({
    where: eq(seoAnalysis.userId, userId),
    orderBy: (table) => [table.createdAt],
  })
  return analyses
}

export async function deleteAnalysis(id: string) {
  const userId = await getUserId()
  const analysis = await db.query.seoAnalysis.findFirst({
    where: eq(seoAnalysis.id, id),
  })

  if (!analysis || analysis.userId !== userId) {
    throw new Error('غیر مجاز')
  }

  await db.delete(seoAnalysis).where(eq(seoAnalysis.id, id))
  revalidatePath('/dashboard')
}
