import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Zap, BarChart3, Shield, Rocket, TrendingUp, Search, Globe } from 'lucide-react'
import { MotionBackground } from '@/components/motion-background'

export const metadata: Metadata = {
  title: 'رنکینگ | خدمات سئو حرفه‌ای - افزایش رتبه گوگل تضمین‌شده',
  description:
    'خدمات سئو حرفه‌ای در تهران. تحلیل رایگان سایت، سئو تکنیکال، بهینه‌سازی Core Web Vitals، سئو محلی. ۵۰۰+ پروژه موفق، ۹۸٪ نرخ رضایت.',
  keywords: 'خدمات سئو ایران، افزایش رتبه گوگل، سئو تهران، تحلیل سایت رایگان، بهینه سازی موتور جستجو',
  alternates: { canonical: 'https://ranking.ir' },
  openGraph: {
    title: 'رنکینگ | خدمات سئو تخصصی در ایران',
    description: 'سایت خود را به صدر نتایج گوگل برسانید. بهینه‌سازی موتور جستجو، تحلیل رایگان، نتایج تضمین‌شده.',
    url: 'https://ranking.ir',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'سئو چیست؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'سئو (بهینه‌سازی موتور جستجو) فرآیند افزایش دیده شدن سایت شما در نتایج ارگانیک موتورهای جستجو مانند گوگل است.',
      },
    },
    {
      '@type': 'Question',
      name: 'چقدر طول می‌کشد تا نتایج سئو ببینم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'معمولاً در ۳ تا ۶ ماه اول می‌توانید بهبود رتبه را مشاهده کنید. ما تضمین می‌کنیم در ۹۰ روز نتایج قابل اندازه‌گیری داشته باشید.',
      },
    },
    {
      '@type': 'Question',
      name: 'تحلیل رایگان سایت چگونه کار می‌کند؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'کافی است آدرس سایت خود را در ابزار تحلیل ما وارد کنید. در چند ثانیه گزارش جامعی از وضعیت سئوی سایت شما دریافت خواهید کرد.',
      },
    },
  ],
}

const features = [
  {
    icon: <BarChart3 size={24} />,
    title: 'تحلیل جامع رایگان',
    description: 'بررسی کامل سایت شامل فاکتورهای تکنیکی، محتوایی و بک‌لینک‌ها — کاملاً رایگان و فوری.',
  },
  {
    icon: <Shield size={24} />,
    title: 'سئو تکنیکال',
    description: 'بهینه‌سازی ساختار فنی سایت، سرعت صفحه، Core Web Vitals و قابلیت ایندکس‌شدن.',
  },
  {
    icon: <Globe size={24} />,
    title: 'سئو محلی در ایران',
    description: 'حضور پررنگ در نتایج محلی گوگل برای مشتریان ایرانی. بهینه‌سازی گوگل مپ و لوکال پک.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'نتایج تضمین‌شده',
    description: 'افزایش ترافیک ارگانیک در ۹۰ روز. اگر نتیجه نگرفتید، پول کامل برمی‌گردد.',
  },
  {
    icon: <Search size={24} />,
    title: 'تحقیق کلمه کلیدی',
    description: 'شناسایی کلمات کلیدی پرجستجو و کم‌رقابت برای بازار ایران با ابزارهای تخصصی.',
  },
  {
    icon: <Zap size={24} />,
    title: 'گزارش‌دهی شفاف',
    description: 'داشبورد زنده با متریک‌های دقیق. هر هفته گزارش پیشرفت دریافت کنید.',
  },
]

const stats = [
  { value: '+۵۰۰', label: 'پروژه موفق' },
  { value: '+۳۰۰%', label: 'میانگین رشد ترافیک' },
  { value: '۹۵%', label: 'رضایت مشتریان' },
  { value: '+۱۰۰', label: 'کلمه کلیدی صفحه اول' },
]

export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <MotionBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="section-label">
                <Zap size={13} />
                سئو تخصصی در ایران
              </div>
              <h1
                className="font-black"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: 'var(--fg)', lineHeight: 1.22 }}
              >
                سایت خود را به صدر{' '}
                <span className="text-gradient">نتایج گوگل</span>{' '}
                برسانید
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                رنکینگ متخصصان بهینه‌سازی موتورهای جستجو در ایران. با استراتژی داده‌محور،
                تکنیک‌های روزآمد و گزارش‌های شفاف، ترافیک ارگانیک سایت خود را افزایش دهید.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/analyzer" className="btn-primary">
                  <Zap size={18} />
                  تحلیل رایگان سایت
                </Link>
                <Link href="/about" className="btn-outline">
                  بیشتر بدانید
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>

            <div className="hidden md:block animate-slide-in">
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                {/* Mini analytics visual */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    className="badge"
                    style={{ marginBottom: '0.75rem', display: 'inline-flex' }}
                  >
                    <TrendingUp size={12} />
                    ترافیک ارگانیک این ماه
                  </div>
                  <div
                    className="font-black text-gradient"
                    style={{ fontSize: '3rem', lineHeight: 1 }}
                  >
                    +۲۸۷٪
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                    میانگین رشد مشتریان رنکینگ
                  </p>
                </div>
                {/* Bar chart visual */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '72px', justifyContent: 'center' }}>
                  {[30, 45, 38, 60, 52, 75, 68, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: '18px',
                        height: `${h}%`,
                        backgroundColor: `var(--primary)`,
                        opacity: 0.3 + i * 0.07,
                        borderRadius: '4px 4px 0 0',
                        transition: 'height 0.3s ease',
                      }}
                    />
                  ))}
                </div>
                <div className="divider" style={{ margin: '1.25rem 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  {[
                    { label: 'بازدید', value: '۱۲,۴۵۰' },
                    { label: 'کلیک', value: '۳,۲۱۸' },
                    { label: 'رتبه', value: '#۱' },
                  ].map((s) => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div className="font-black" style={{ color: 'var(--primary)', fontSize: '1.125rem' }}>{s.value}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-black text-gradient" style={{ fontSize: '2rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
              <BarChart3 size={13} />
              خدمات ما
            </div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--fg)', marginBottom: '1rem' }}>
              چرا رنکینگ را انتخاب کنید؟
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto', fontSize: '1.05rem' }}>
              بهترین ابزارها و متخصص‌ترین تیم برای افزایش رتبه سایت شما در گوگل ایران
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <article key={i} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="icon-box" aria-hidden="true">{f.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.4rem' }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black" style={{ fontSize: '2rem', color: 'var(--fg)', textAlign: 'center', marginBottom: '2.5rem' }}>
            سوالات متداول
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqSchema.mainEntity.map((q, i) => (
              <details
                key={i}
                className="card"
                style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}
              >
                <summary
                  style={{ fontWeight: 700, color: 'var(--fg)', fontSize: '1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  {q.name}
                  <span style={{ color: 'var(--primary)', fontSize: '1.25rem', lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.925rem', lineHeight: 1.7 }}>
                  {q.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="card-glow"
            style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '20px' }}
          >
            <h2 className="font-black" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--fg)', marginBottom: '1rem' }}>
              همین الان سایت خود را تحلیل کنید
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              ابزار تحلیل رایگان ما را امتحان کنید و نقاط ضعف سئوی سایت‌تان را کشف کنید.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/analyzer" className="btn-primary">
                <Search size={18} />
                شروع تحلیل رایگان
              </Link>
              <Link href="/sign-up" className="btn-outline">
                ثبت‌نام رایگان
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
