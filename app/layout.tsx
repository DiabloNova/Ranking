import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://ranking.ir'),
  title: {
    default: 'رنکینگ | خدمات تخصصی سئو در ایران - افزایش رتبه گوگل',
    template: '%s',
  },
  description:
    'رنکینگ متخصص سئو در ایران. خدمات بهینه‌سازی موتور جستجو، تحلیل رایگان سایت، سئو تکنیکال، سئو محلی و افزایش ترافیک ارگانیک. ۹۰۰+ مشتری راضی و ۵۰۰ پروژه موفق.',
  keywords: [
    'سئو', 'بهینه‌سازی موتور جستجو', 'سئو ایران', 'افزایش رتبه گوگل',
    'سئو تکنیکال', 'سئو محلی', 'ترافیک ارگانیک', 'بک‌لینک',
    'کلمه کلیدی', 'تحلیل سایت', 'بهینه‌سازی سایت', 'SEO Iran',
    'رنکینگ', 'ranking.ir', 'خدمات سئو تهران', 'تخصصی سئو',
    'بهینه سازی گوگل', 'سئو مدرن', 'سئو ۱۴۰۳', 'Digital Marketing Iran',
  ],
  authors: [{ name: 'رنکینگ', url: 'https://ranking.ir' }],
  creator: 'رنکینگ',
  publisher: 'رنکینگ',
  category: 'technology',
  alternates: {
    canonical: 'https://ranking.ir',
    languages: {
      'fa-IR': 'https://ranking.ir',
      'fa': 'https://ranking.ir',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://ranking.ir',
    siteName: 'رنکینگ',
    title: 'رنکینگ | خدمات تخصصی سئو در ایران',
    description: 'افزایش رتبه سایت شما در گوگل. ۹۰ روز نتیجه یا بازگشت پول. تیم متخصص سئو با ۱۰+ سال تجربه.',
    emails: ['info@ranking.ir'],
    images: [
      {
        url: 'https://ranking.ir/logo.webp',
        width: 800,
        height: 400,
        alt: 'رنکینگ - خدمات سئو حرفه‌ای در ایران',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رنکینگ | خدمات تخصصی سئو در ایران',
    description: 'افزایش رتبه سایت شما در گوگل با خدمات سئو حرفه‌ای و داده‌محور.',
    images: ['https://ranking.ir/logo.webp'],
    creator: '@ranking_seo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-token',
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'رنکینگ',
  },
  other: {
    'geo.region': 'IR',
    'geo.placename': 'Tehran, Iran',
    'geo.position': '35.6892;51.3890',
    'ICBM': '35.6892, 51.3890',
    'og:locale': 'fa_IR',
    'fb:app_id': '',
    'rating': 'general',
    'revisit-after': '7 days',
    'language': 'Persian',
    'Content-Language': 'fa',
    'availability': 'in_stock',
    'og:type': 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2faff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e1a' },
  ],
}

const peyda = localFont({
  src: '../public/fonts/Peyda-Regular.ttf',
  variable: '--font-peyda',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type':    'Organization',
  '@id':      'https://ranking.ir/#organization',
  name:       'رنکینگ',
  url:        'https://ranking.ir',
  logo: {
    '@type':       'ImageObject',
    url:           'https://ranking.ir/logo.webp',
    width:         '512',
    height:        '512',
  },
  description:      'ارائه خدمات تخصصی سئو، بهینه‌سازی موتور جستجو و افزایش ترافیک ارگانیک در ایران',
  foundingDate:     '2020',
  foundingLocation: { '@type': 'Place', name: 'Tehran, Iran' },
  address: {
    '@type':           'PostalAddress',
    addressLocality:   'Tehran',
    addressRegion:     'Tehran',
    addressCountry:    'IR',
  },
  contactPoint: {
    '@type':            'ContactPoint',
    telephone:          '+98-21-91212345',
    contactType:        'customer service',
    areaServed:         'IR',
    availableLanguage:  ['Persian', 'English'],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '13:00',
    }
  ],
  sameAs: [
    'https://instagram.com/ranking_seo',
    'https://t.me/ranking_seo',
    'https://linkedin.com/company/ranking-ir',
  ],
}

const websiteSchema = {
  '@context':       'https://schema.org',
  '@type':          'WebSite',
  '@id':            'https://ranking.ir/#website',
  url:              'https://ranking.ir',
  name:             'رنکینگ',
  description:      'خدمات تخصصی سئو در ایران',
  publisher:        { '@id': 'https://ranking.ir/#organization' },
  inLanguage:       'fa-IR',
  potentialAction: {
    '@type':       'SearchAction',
    target:        { '@type': 'EntryPoint', urlTemplate: 'https://ranking.ir/analyzer?url={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${peyda.variable} font-peyda antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
