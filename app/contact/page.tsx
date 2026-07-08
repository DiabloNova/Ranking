import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'

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

export default function ContactPage() {
  return <ContactContent />
}
