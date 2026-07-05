import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'شرایط استفاده | رنکینگ - خدمات سئو',
  description: 'شرایط و ضوابط استفاده از خدمات رنکینگ. تعریف خدمات، مسئولیت‌های کاربر، و مسئولیت قانونی.',
  keywords: 'شرایط استفاده, شرایط خدمات, قوانین رنکینگ',
  alternates: { canonical: 'https://ranking.ir/terms' },
  robots: {
    index: true,
    follow: true,
  },
}

const sections = [
  {
    title: '۱. تعریف خدمات',
    body: 'خدمات رنکینگ شامل تجزیه‌وتحلیل وب‌سایت، مشاوره سئو و گزارش‌های پیشرفت است. ما تمام سعی خود را می‌کنیم در قبال رقابت‌پذیری سایت شما تلاش کنیم.',
  },
  {
    title: '۲. مسئولیت کاربر',
    body: 'کاربران مسئول محتوای خود هستند. تنها از روش‌های کلاه‌سفید سئو استفاده کنید. تخلف از این شرایط موجب لغو حساب خواهد شد.',
  },
  {
    title: '۳. محدودیت مسئولیت',
    body: 'رنکینگ تضمین نمی‌دهد که سایت شما دقیقاً در رتبه مطلوب قرار خواهد گرفت. نتایج بستگی به عوامل متعددی دارد که خارج از کنترل ما هستند.',
  },
  {
    title: '۴. تغییرات شرایط',
    body: 'رنکینگ حق دارد این شرایط را در هر زمانی تغییر دهد. استفاده مداوم از سرویس به معنای پذیرش شرایط جدید است.',
  },
  {
    title: '۵. تماس با ما',
    body: 'برای هرگونه سوال درباره این شرایط، لطفاً با ما تماس بگیرید: info@ranking.ir',
  },
]

export default function TermsPage() {
  return (
    <main className="page-wrapper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <nav className="text-sm mb-8" aria-label="مسیر صفحه">
          <ol className="flex items-center gap-2" style={{ color: 'var(--fg-muted)' }}>
            <li><Link href="/" className="hover-link">خانه</Link></li>
            <li>/</li>
            <li style={{ color: 'var(--accent)' }}>شرایط استفاده</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-black mb-3" style={{ color: 'var(--fg)' }}>
          شرایط استفاده
        </h1>
        <p className="mb-10 text-sm" style={{ color: 'var(--fg-muted)' }}>
          آخرین به‌روزرسانی: دی ۱۴۰۳
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title} className="card">
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--fg)' }}>
                {s.title}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <Link href="/contact" className="btn-primary inline-flex">
            تماس با ما
          </Link>
        </div>
      </div>
    </main>
  )
}
