import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type':    'Organization',
  '@id':      'https://ranking.ir/#organization',
  name:       'رنکینگ',
  url:        'https://ranking.ir',
  logo: {
    '@type':       'ImageObject',
    url:           'https://ranking.ir/og-image.png',
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
    availableLanguage:  'Persian',
  },
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

export const metadata: Metadata = {
  metadataBase: new URL('https://ranking.ir'),
  title: {
    default: 'رنکینگ | خدمات تخصصی سئو در ایران - افزایش رتبه گوگل',
    template: '%s | رنکینگ',
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
        url: 'https://ranking.ir/og-image.png',
        width: 1200,
        height: 630,
        alt: 'رنکینگ - خدمات سئو حرفه‌ای در ایران',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رنکینگ | خدمات تخصصی سئو در ایران',
    description: 'افزایش رتبه سایت شما در گوگل با خدمات سئو حرفه‌ای و داده‌محور.',
    images: ['https://ranking.ir/og-image.png'],
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
    other: {
      'bingbot': 'index, follow',
      'yandex': 'index, follow',
    },
  },
  verification: {
    google: 'your-google-site-verification-token',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Core SEO Meta Tags */}
        <link rel="canonical" href="https://ranking.ir" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" hrefLang="fa-IR" href="https://ranking.ir" />
        <link rel="alternate" hrefLang="fa" href="https://ranking.ir" />
        
        {/* Browser Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Performance & Mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="رنکینگ" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* App Links */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f2faff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0e1a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
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
