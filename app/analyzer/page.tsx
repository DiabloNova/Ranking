import type { Metadata } from 'next'
import { AnalyzerClient } from '@/components/analyzer-client'

export const metadata: Metadata = {
  title: 'تحلیلگر سئو رایگان | رنکینگ',
  description: 'ابزار تحلیل سئو رایگان آنلاین. بررسی کامل سایت شامل عنوان، توضیحات، فاکتورهای تکنیکی، Core Web Vitals و ۱۲+ معیار سئوی مهم.',
  keywords: 'تحلیلگر سئو, تحلیل سایت رایگان, SEO analyzer, ابزار سئو, بررسی سئو',
  alternates: { canonical: 'https://ranking.ir/analyzer' },
  openGraph: {
    title: 'تحلیلگر سئو رایگان',
    description: 'بررسی سئوی سایت در چند ثانیه و دریافت گزارش جامع',
    url: 'https://ranking.ir/analyzer',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'خانه',
      item: 'https://ranking.ir',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'تحلیلگر سئو',
      item: 'https://ranking.ir/analyzer',
    },
  ],
}

export default function AnalyzerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AnalyzerClient />
    </>
  )
}
