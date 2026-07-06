import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, MapPin, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سئو محلی | رنکینگ',
  description: 'حضور پررنگ در نتایج محلی گوگل برای مشتریان ایرانی. بهینه‌سازی گوگل مپ و لوکال پک',
  keywords: 'سئو محلی, گوگل مپ, لوکال SEO, تهران, شهرها',
  alternates: { canonical: 'https://ranking.ir/services/local-seo' },
}

const services = [
  { title: 'بهینه‌سازی Google My Business', description: 'فعال‌سازی و بهینه‌سازی صفحه کسب و کار گوگل' },
  { title: 'مدیریت نقل‌قول‌های محلی', description: 'ثبت در دایرکتوری‌های محلی و سایت‌های نقل‌قول' },
  { title: 'مدیریت نظرات', description: 'جمع‌آوری نظرات مثبت و پاسخگویی به نقدها' },
  { title: 'محتوای محلی', description: 'ایجاد محتوایی تخصصی برای شهرهای هدف' },
  { title: 'محلی‌سازی Schema', description: 'اضافه کردن Structured Data محلی' },
  { title: 'مدیریت عکس‌ها', description: 'بهینه‌سازی و ارسال عکس‌های محل کار' },
]

const benefits = [
  'بیشتر مشتریان ایرانی محلی جستجو می‌کنند',
  'ظاهر شدن در نقشه گوگل رقابت کم‌تری دارد',
  'مشتریان محلی هدف‌شدۀ شما هستند',
  'نرخ تبدیل بیشتر از سئوی سراسری',
  'تاثیر فوری و مشخص',
]

export default function LocalSeoPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-sm" style={{ color: 'var(--muted)' }}>
            <ArrowLeft size={16} />
            بازگشت به خانه
          </Link>
          <h1 className="font-black mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg)' }}>
            سئو محلی در ایران
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
            حضور قوی در نتایج محلی گوگل برای جذب مشتریان ایرانی در شهر‌تان.
          </p>
          <Link href="#" className="btn-primary">
            <MapPin size={18} />
            شروع سئو محلی
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            خدمات سئو محلی ما
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-8 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            چرا سئو محلی اهمیت دارد؟
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
                <p style={{ color: 'var(--fg)', fontSize: '1rem', lineHeight: 1.6 }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Star size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۸۵%
              </div>
              <p style={{ color: 'var(--muted)' }}>جستجوی محلی</p>
            </div>
            <div>
              <Users size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۳x
              </div>
              <p style={{ color: 'var(--muted)' }}>بیشتر تماس</p>
            </div>
            <div>
              <MapPin size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۲ روز
              </div>
              <p style={{ color: 'var(--muted)' }}>نتایج سریع</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black mb-4" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            آماده‌اید بیشتر مشتری جذب کنید؟
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            سئو محلی ما به شما کمک می‌کند در نقشه گوگل بیشتر دیده شوید.
          </p>
          <Link href="#" className="btn-primary">
            درخواست مشاوره رایگان
          </Link>
        </div>
      </section>
    </div>
  )
}
