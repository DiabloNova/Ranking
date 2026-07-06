import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Zap, Shield, Gauge } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سئو تکنیکال | رنکینگ',
  description: 'بهینه‌سازی ساختار فنی سایت، سرعت صفحه، Core Web Vitals و قابلیت ایندکس‌شدن',
  keywords: 'سئو تکنیکال, بهینه سازی سایت, Core Web Vitals, سرعت صفحه',
  alternates: { canonical: 'https://ranking.ir/services/technical-seo' },
}

const services = [
  { title: 'بهینه‌سازی سرعت', description: 'افزایش سرعت بارگذاری صفحات و کاهش Time to First Byte' },
  { title: 'Core Web Vitals', description: 'بهبود LCP، FID و CLS برای تجربه کاربر بهتر' },
  { title: 'ساختار URL', description: 'طراحی ساختار URL منطقی و بهینه' },
  { title: 'XML Sitemap', description: 'ایجاد و بهینه‌سازی نقشه سایت' },
  { title: 'Robots.txt', description: 'تنظیم صحیح فایل robots.txt برای بهتر ایندکس شدن' },
  { title: 'SSL Certificate', description: 'اطمینان از استفاده از HTTPS در کل سایت' },
  { title: 'Schema Markup', description: 'اضافه کردن Structured Data برای Rich Snippets' },
  { title: 'Mobile Optimization', description: 'بهینه‌سازی نسخه موبایل و Responsive Design' },
  { title: 'Redirects', description: 'مدیریت صحیح ریدایرکت‌ها و الاف لینک‌ها' },
]

export default function TechnicalSeoPage() {
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
            سئو تکنیکال
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
            بهینه‌سازی ساختار فنی سایت برای بهتر ایندکس شدن در گوگل و بهبود تجربه کاربر.
          </p>
          <Link href="#" className="btn-primary">
            <Zap size={18} />
            درخواست مشاوره رایگان
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            خدمات تکنیکال ما شامل
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Shield size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
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

      {/* Benefits */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-8 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            فوایدسئو تکنیکال
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>ایندکس بهتر</h3>
                <p style={{ color: 'var(--muted)' }}>گوگل سایت شما را بهتر می‌فهمد و ایندکس می‌کند</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>تجربه کاربر بهتر</h3>
                <p style={{ color: 'var(--muted)' }}>سایت سریع‌تر و کارآمدتر برای بازدیدکنندگان</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>بهبود رتبه</h3>
                <p style={{ color: 'var(--muted)' }}>سایت تکنیکالی بهتر بهتر در نتایج جستجو رتبه می‌یابد</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>کاهش Bounce Rate</h3>
                <p style={{ color: 'var(--muted)' }}>سرعت بیشتر = میزان خروج کمتر = تبدیل بیشتر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gauge size={48} style={{ color: 'var(--primary)', margin: '0 auto 2rem' }} />
          <h2 className="font-black mb-4" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            سایت شما به بهینه‌سازی تکنیکال نیاز دارد؟
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            تیم متخصص ما آماده است تا سایت‌تان را تحلیل و بهبود دهد.
          </p>
          <Link href="#" className="btn-primary">
            درخواست مشاوره رایگان
          </Link>
        </div>
      </section>
    </div>
  )
}
