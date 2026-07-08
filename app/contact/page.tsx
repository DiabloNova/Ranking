import { ContactForm } from '@/components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تماس با ما | رنکینگ - خدمات سئو در ایران',
  description: 'تماس با تیم رنکینگ برای مشاوره رایگان سئو. شماره تماس: ۲۱-۹۱۲۱۲۳۴۵، ایمیل: info@ranking.ir',
  keywords: 'تماس رنکینگ, مشاوره سئو رایگان, شماره تماس, فرم تماس',
  alternates: { canonical: 'https://ranking.ir/contact' },
  openGraph: {
    title: 'تماس با رنکینگ',
    description: 'تماس با تیم متخصص سئو ما برای کسب مشاوره رایگان',
    url: 'https://ranking.ir/contact',
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
      name: 'تماس با ما',
      item: 'https://ranking.ir/contact',
    },
  ],
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section style={{ padding: '5rem 0 4rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg)', marginBottom: '1rem' }}>
            تماس با <span className="text-gradient">ما</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
            سوالی دارید؟ تیم ما آماده پاسخ‌گویی است
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
