import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Search, Flame, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تحقیق کلمه کلیدی | رنکینگ',
  description: 'شناسایی کلمات کلیدی پرجستجو و کم‌رقابت برای بازار ایران با ابزارهای تخصصی',
  keywords: 'تحقیق کلمه کلیدی, کیورد ریسرچ, کلمات کلیدی SEO',
  alternates: { canonical: 'https://ranking.ir/services/keyword-research' },
}

const services = [
  { title: 'تحلیل جستجو', description: 'بررسی حجم جستجو و سطح رقابت کلمات کلیدی' },
  { title: 'تحلیل رقبا', description: 'دیدن اینکه رقبا برای چه کلماتی رتبه‌بندی می‌شوند' },
  { title: 'کلمات پیشنهادی', description: 'پیدا کردن فرصت‌های نهفته و کلمات طولانی‌تر' },
  { title: 'نقشه محتوا', description: 'برنامه‌ریزی محتوا برای کلمات کلیدی هدف' },
  { title: 'Intent Analysis', description: 'درک نیت جستجو و تطابق با محتوا' },
  { title: 'موقعیت‌بندی', description: 'تعریف کلمات کلیدی برای هدف‌گذاری بهتر' },
]

const benefits = [
  { title: 'بیشتر بازدید', description: 'کلمات کلیدی صحیح = بیشتر بازدید ارگانیک' },
  { title: 'مشتری مناسب', description: 'جذب افرادی که واقعاً به خدمات شما نیاز دارند' },
  { title: 'کاهش هزینه', description: 'بدون خرج تبلیغ، فقط SEO طبیعی' },
  { title: 'مزیت رقابتی', description: 'پیدا کردن کلماتی که رقبا نمی‌دانند' },
]

export default function KeywordResearchPage() {
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
            تحقیق کلمه کلیدی
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2rem' }}>
            بنیاد هر استراتژی SEO موفق، کلمات کلیدی صحیح هستند. ما آن‌ها را برای شما پیدا می‌کنیم.
          </p>
          <Link href="#" className="btn-primary">
            <Search size={18} />
            درخواست تحقیق کلمات کلیدی
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            ما در تحقیق کلمه کلیدی انجام می‌دهیم
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Search size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }} />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            فوایدتحقیق کلمه کلیدی
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                <Flame size={28} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Points */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black mb-12 text-center" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            داده‌هایی که تحلیل می‌کنیم
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۱۰۰K+
              </div>
              <p style={{ color: 'var(--muted)' }}>کلمه کلیدی تحلیل شده</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۱۵+
              </div>
              <p style={{ color: 'var(--muted)' }}>معیار تحلیل</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۹۲%
              </div>
              <p style={{ color: 'var(--muted)' }}>دقت پیش‌بینی</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="font-black text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                ۲۴h
              </div>
              <p style={{ color: 'var(--muted)' }}>زمان تحویل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target size={48} style={{ color: 'var(--primary)', margin: '0 auto 2rem' }} />
          <h2 className="font-black mb-4" style={{ fontSize: '2.2rem', color: 'var(--fg)' }}>
            کلمات کلیدی صحیح = بیشتر بازدید
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            تحقیق کلمه کلیدی ما شما را به رتبه‌های بالا می‌برد.
          </p>
          <Link href="#" className="btn-primary">
            درخواست تحقیق کلمات کلیدی
          </Link>
        </div>
      </section>
    </div>
  )
}
