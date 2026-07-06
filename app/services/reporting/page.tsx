import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, BarChart3, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'گزارش‌دهی شفاف | رنکینگ',
  description: 'داشبورد زنده با متریک‌های دقیق. هر هفته گزارش پیشرفت دریافت کنید',
  keywords: 'گزارش SEO, داشبورد, متریک‌های SEO, تحلیل پیشرفت',
  alternates: { canonical: 'https://ranking.ir/services/reporting' },
}

const features = [
  { title: 'داشبورد زنده', description: 'دسترسی واقع‌زمان به متریک‌های مهم' },
  { title: 'گزارش ماهانه', description: 'گزارش تفصیلی ماه با توضیحات کامل' },
  { title: 'تحلیل رتبه', description: 'تغییرات رتبه برای هر کلمه کلیدی' },
  { title: 'مقایسه رقبا', description: 'مقایسه با رقبای شما' },
  { title: 'اطلاعات ترافیک', description: 'آمار بازدیدکنندگان و تبدیل‌ها' },
  { title: 'پیشنهادات کاربردی', description: 'توصیه‌های عملی برای بهبود' },
]

const metrics = [
  { title: 'رتبه کلمات کلیدی', description: 'موقعیت دقیق هر کلمه کلیدی' },
  { title: 'ترافیک ارگانیک', description: 'تعداد کلیک‌های ارگانیک' },
  { title: 'تصور', description: 'تعداد نمایش سایت در نتایج' },
  { title: 'Click Through Rate', description: 'درصد کلیک‌های دریافتی' },
  { title: 'بک‌لینک', description: 'تعداد و کیفیت لینک‌های ورودی' },
  { title: 'Core Web Vitals', description: 'سرعت و اندازه‌های UX' },
]

const reportTypes = [
  { name: 'گزارش هفتگی', includes: 'خلاصه اجمالی، رتبه‌ها، ترافیک' },
  { name: 'گزارش ماهانه', includes: 'تحلیل کامل، توصیه‌ها، مقایسه' },
  { name: 'گزارش سه‌ماهه', includes: 'اتمام کامل، ROI، نتایج' },
]

export default function ReportingPage() {
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
            گزارش‌دهی شفاف
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
            داشبورد زنده و گزارش‌های مفصل. همیشه بدانید پول‌تان به کجا می‌رود.
          </p>
          <Link href="#" className="btn-primary">
            <BarChart3 size={18} />
            درخواست دسترسی داشبورد
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            قابلیت‌های داشبورد
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            متریک‌های مراقبت شده
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <BarChart3 size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                  {metric.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            انواع گزارش‌ها
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reportTypes.map((report, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <Calendar size={32} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  {report.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {report.includes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Transparency */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-8 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            چرا شفافیت مهم است؟
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <TrendingUp size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>پول شما ارزشمند است</h3>
                <p style={{ color: 'var(--muted)' }}>شما باید دقیقاً بدانید پول‌تان کجا خرج شده است</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>نتایج ملموس</h3>
                <p style={{ color: 'var(--muted)' }}>اعداد دقیق، نه وعده‌های خام</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <BarChart3 size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.25rem' }}>تصمیم‌گیری بهتر</h3>
                <p style={{ color: 'var(--muted)' }}>با داده‌های واقعی، تصمیمات بهتر بگیرید</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black mb-4" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            داشبورد خود را ببینید
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            دسترسی فوری به تمام داده‌های SEO سایت‌تان.
          </p>
          <Link href="#" className="btn-primary">
            درخواست دسترسی داشبورد
          </Link>
        </div>
      </section>
    </div>
  )
}
