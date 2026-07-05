import type { Metadata } from 'next'
import { Target, Users, Lightbulb, Award, TrendingUp, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'درباره رنکینگ | تیم متخصص سئو با ۱۰+ سال تجربه',
  description:
    'رنکینگ: تیمی از ۴ متخصص سئو با ۱۰+ سال تجربه در ایران. بیش از ۵۰۰ مشتری راضی و ۱۵۰۰+ پروژه موفق. ماموریت ما افزایش رتبه سایت شما در گوگل است.',
  keywords: 'درباره رنکینگ, تیم سئو, متخصصین بهینه سازی, تجربه سئو, تاریخچه رنکینگ',
  alternates: { canonical: 'https://ranking.ir/about' },
  openGraph: {
    title: 'درباره رنکینگ | تیم متخصص سئو',
    description: 'تیم متخصص سئو رنکینگ با ۱۰+ سال تجربه و ۵۰۰+ مشتری راضی',
    url: 'https://ranking.ir/about',
  },
}

const team = [
  { name: 'علی محمدی',   role: 'مدیر اجرایی',      initials: 'ع.م' },
  { name: 'فاطمه احمدی', role: 'متخصص سئو',         initials: 'ف.ا' },
  { name: 'محمد حسینی',  role: 'توسعه‌دهنده',       initials: 'م.ح' },
  { name: 'سارا رضایی',  role: 'تحلیلگر داده',     initials: 'س.ر' },
]

const stats = [
  { value: '۵۰۰+',  label: 'مشتری راضی' },
  { value: '۱۰+',   label: 'سال تجربه' },
  { value: '۱۵۰۰+', label: 'پروژه موفق' },
  { value: '۹۸٪',   label: 'نرخ موفقیت' },
]

const values = [
  {
    icon: <Target size={22} />,
    title: 'ماموریت',
    desc: 'کمک به کسب‌وکارها برای دستیابی به رتبه‌های بالاتر در گوگل و افزایش درآمد ارگانیک.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'چشم‌انداز',
    desc: 'شدن معتبرترین شرکت سئو در ایران با رویکرد داده‌محور و اخلاق حرفه‌ای.',
  },
  {
    icon: <Users size={22} />,
    title: 'ارزش‌ها',
    desc: 'شفافیت، نوآوری، تعهد به نتایج قابل اندازه‌گیری و رضایت کامل مشتری.',
  },
]

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 4rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <Award size={13} />
            تیم متخصص ما
          </div>
          <h1 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg)', marginBottom: '1rem' }}>
            درباره <span className="text-gradient">رنکینگ</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            متخصصان سئو با بیش از ۱۰ سال تجربه و بیش از ۲۹۹ پروژه موفق در ایران
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" style={{ padding: '3rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div className="icon-box"><TrendingUp size={20} /></div>
              <h2 className="font-black" style={{ fontSize: '1.75rem', color: 'var(--fg)' }}>داستان ما</h2>
            </div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1rem' }}>
              رنکینگ در سال ۱۴۰۰ تأسیس شد تا کسب‌وکارهای کوچک و بزرگ ایرانی را در بهینه‌سازی موتورهای
              جستجو یاری کند. ما باور داریم هر کسب‌وکاری شایسته است که در جستجوهای آنلاین دیده شود.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1.05rem' }}>
              تیم ما متشکل از متخصصان سئو، برنامه‌نویسان و تحلیلگران داده است که با تکنیک‌های سفیدکلاه
              و استراتژی‌های داده‌محور، نتایج پایدار برای مشتریان به ارمغان می‌آورند.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section style={{ padding: '2rem 0 5rem', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="font-black" style={{ fontSize: '2rem', color: 'var(--fg)' }}>
              ماموریت، چشم‌انداز و ارزش‌ها
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="icon-box">{v.icon}</div>
                  <h3 className="font-black" style={{ fontSize: '1.15rem', color: 'var(--fg)' }}>{v.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.925rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div className="font-black text-gradient" style={{ fontSize: '2.25rem' }}>{s.value}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
              <Users size={13} />
              تیم ما
            </div>
            <h2 className="font-black" style={{ fontSize: '2rem', color: 'var(--fg)' }}>
              متخصصین مجرب سئو
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div
                  className="font-black text-gradient"
                  style={{
                    width: 64, height: 64, borderRadius: '50%',
                    backgroundColor: 'var(--tag-bg)',
                    border: '2px solid var(--border-strong)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem', fontSize: '1.1rem',
                  }}
                >
                  {m.initials}
                </div>
                <h3 className="font-bold" style={{ color: 'var(--fg)', marginBottom: '0.25rem' }}>{m.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="font-black" style={{ fontSize: '2rem', color: 'var(--fg)', marginBottom: '0.75rem' }}>
              چرا رنکینگ؟
            </h2>
            <p style={{ color: 'var(--muted)' }}>تخصص، شفافیت و نتایج قابل اندازه‌گیری</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: <ShieldCheck size={20} />, title: 'روش‌های سفیدکلاه', desc: 'تمام تکنیک‌های ما مطابق دستورالعمل‌های گوگل است. بدون ریسک پنالتی.' },
              { icon: <TrendingUp size={20} />, title: 'نتایج تضمین‌شده', desc: 'بهبود رتبه در ۹۰ روز یا بازگشت کامل پول. ما به نتایجمان ایمان داریم.' },
              { icon: <Users size={20} />, title: 'تیم اختصاصی', desc: 'هر مشتری یک مدیر پروژه اختصاصی دارد که گزارش هفتگی می‌دهد.' },
              { icon: <Lightbulb size={20} />, title: 'استراتژی سفارشی', desc: 'راهکار هر مشتری بر اساس نیاز، رقبا و بازار هدف طراحی می‌شود.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--fg)', marginBottom: '0.35rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
