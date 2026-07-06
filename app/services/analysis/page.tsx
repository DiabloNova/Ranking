import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, BarChart3, Clock, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تحلیل جامع رایگان | رنکینگ',
  description: 'بررسی کامل سایت شامل فاکتورهای تکنیکی، محتوایی و بک‌لینک‌ها - کاملاً رایگان و فوری',
  keywords: 'تحلیل سایت رایگان, تحلیل سئو, بررسی سایت, SEO audit free',
  alternates: { canonical: 'https://ranking.ir/services/analysis' },
}

const benefits = [
  { title: 'تحلیل تکنیکی کامل', description: 'بررسی ساختار سایت، سرعت، Mobile-friendliness و مسائل ایندکس‌شدن' },
  { title: 'تجزیه محتوا', description: 'ارزیابی کیفیت محتوا، عنوان‌ها، توضیحات و بهینه‌سازی کلمات کلیدی' },
  { title: 'بررسی بک‌لینک‌ها', description: 'تحلیل کمیت و کیفیت لینک‌های ورودی و نقاط ضعف لینک‌سازی' },
  { title: 'Core Web Vitals', description: 'اندازه‌گیری سرعت صفحه، تاخیر تعاملی و تغییر شاخص' },
  { title: 'گزارش دقیق', description: 'دریافت گزارشی جامع با توصیه‌های عملی برای بهبود' },
  { title: 'رقابت‌شناسی', description: 'مقایسه وضعیت سایت شما با رقبای اصلی' },
]

const process = [
  { step: 1, title: 'ورود URL', description: 'آدرس سایت خود را وارد کنید' },
  { step: 2, title: 'اسکن خودکار', description: 'ابزار‌های ما سایت را به طور جامع بررسی می‌کند' },
  { step: 3, title: 'تولید گزارش', description: 'گزارشی دقیق و قابل فهم تولید می‌شود' },
  { step: 4, title: 'دریافت نتایج', description: 'نتایج فوری و توصیه‌های عملی دریافت کنید' },
]

export default function AnalysisServicePage() {
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
            تحلیل جامع رایگان سایت
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
            ابزار تحلیل ما وضعیت کامل سئوی سایت‌تان را به شما نشان می‌دهد. در چند ثانیه، گزارشی جامع و قابل فهم دریافت کنید.
          </p>
          <Link href="/analyzer" className="btn-primary">
            <BarChart3 size={18} />
            شروع تحلیل رایگان
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            قابلیت‌های تحلیل شامل
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            نحوه کار تحلیل
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    background: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: '0 auto 1rem'
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۵ ثانیه
              </div>
              <p style={{ color: 'var(--muted)' }}>زمان تحلیل</p>
            </div>
            <div>
              <Target size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۱۵۰+
              </div>
              <p style={{ color: 'var(--muted)' }}>معیار بررسی</p>
            </div>
            <div>
              <Users size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۱۰۰K+
              </div>
              <p style={{ color: 'var(--muted)' }}>تحلیل انجام‌شده</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black mb-4" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            سایت خود را همین الان تحلیل کنید
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            هیچ کارت اعتباری لازم نیست. فقط آدرس سایت خود را وارد کنید و نتایج را در چند ثانیه دریافت کنید.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/analyzer" className="btn-primary">
              شروع تحلیل رایگان
            </Link>
            <Link href="/" className="btn-outline">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
