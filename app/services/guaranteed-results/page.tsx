import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'نتایج تضمین‌شده | رنکینگ',
  description: 'افزایش ترافیک ارگانیک تضمین‌شده در ۹۰ روز. اگر نتیجه نگرفتید، پول کامل برمی‌گردد',
  keywords: 'نتایج تضمین شده, گارانتی SEO, بازگشت پول',
  alternates: { canonical: 'https://ranking.ir/services/guaranteed-results' },
}

const guarantees = [
  { title: 'افزایش ترافیک', description: 'کاهش نپذیری بیش از ۲۵% ترافیک ارگانیک در ۹۰ روز' },
  { title: 'بازگشت پول ۱۰۰%', description: 'اگر نتایج تضمین‌شده دریافت نکردید، تمام پول برگشت داده می‌شود' },
  { title: 'گزارش‌های ماهانه', description: 'گزارش دقیق و شفاف هر ماه از پیشرفت کار' },
  { title: 'تیم اختصاصی', description: 'یک متخصص سئو تخصیص‌یافته برای پروژه شما' },
  { title: 'مشاوره رایگان', description: 'مشاوره ۳۰ دقیقه رایگان قبل از شروع کار' },
  { title: 'پشتیبانی ۲۴/۷', description: 'تیم پشتیبانی ما همیشه آماده کمک است' },
]

const process = [
  {
    step: 1,
    title: 'تحلیل عمیق',
    description: 'بررسی جامع سایت، رقبا و فرصت‌های SEO'
  },
  {
    step: 2,
    title: 'استراتژی',
    description: 'تعریف استراتژی‌ای دقیق برای رسیدن به اهداف'
  },
  {
    step: 3,
    title: 'اجرا',
    description: 'اجرای طرح‌ها و تغییرات مورد نیاز'
  },
  {
    step: 4,
    title: 'نظارت',
    description: 'مراقبت ثابت و بهبود نتایج'
  },
]

export default function GuaranteedResultsPage() {
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
            نتایج تضمین‌شده
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
            افزایش ترافیک ارگانیک تضمین‌شده یا پول برگشت. ما بر پیامد نهایی مسئول هستیم.
          </p>
          <Link href="#" className="btn-primary">
            <Shield size={18} />
            درخواست تضمین‌شده
          </Link>
        </div>
      </section>

      {/* What We Guarantee */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            ما تضمین می‌کنیم
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      {guarantee.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      {guarantee.description}
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
            نحوه کار
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

      {/* Why Our Guarantee Works */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-8 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            چرا می‌توانیم تضمین دهیم؟
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <TrendingUp size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>۱۰+ سال تجربه</h3>
                <p style={{ color: 'var(--muted)' }}>تیم ما ۱۰+ سال در صنعت SEO فعالیت دارد</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Zap size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>۵۰۰+ پروژه موفق</h3>
                <p style={{ color: 'var(--muted)' }}>بیش از ۵۰۰ پروژه موفق در بخش‌های مختلف</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>۹۸% رضایت</h3>
                <p style={{ color: 'var(--muted)' }}>۹۸% از مشتریان ما با نتایج راضی هستند</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black mb-4" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            آماده‌اید پول خود را نجات دهید؟
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            تنها کافی است اگر نتایج دریافت نکردید، پول برگشت داریم.
          </p>
          <Link href="#" className="btn-primary">
            شروع برنامه تضمین‌شده
          </Link>
        </div>
      </section>
    </div>
  )
}
