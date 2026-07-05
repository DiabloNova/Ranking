import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سیاست حریم خصوصی | رنکینگ',
  description: 'سیاست حریم خصوصی رنکینگ. نحوه جمع‌آوری، استفاده و حفاظت از اطلاعات شما',
  keywords: 'حریم خصوصی, سیاست حریم خصوصی, حفاظت اطلاعات',
  alternates: { canonical: 'https://ranking.ir/privacy' },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-soft py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-foreground mb-8">سیاست حریم خصوصی</h1>
        
        <div className="neumorphic-card space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">۱. جمع‌آوری اطلاعات</h2>
            <p className="text-muted leading-relaxed">
              ما فقط اطلاعاتی که برای فراهم کردن خدمات لازم است جمع‌آوری می‌کنیم. این شامل آدرس URL وب‌سایت، ایمیل و نتایج تجزیه‌وتحلیل است.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">۲. استفاده از اطلاعات</h2>
            <p className="text-muted leading-relaxed">
              اطلاعات شما صرفاً برای بهبود خدمات استفاده می‌شود. ما هرگز اطلاعات شما را به شخص ثالث فروخت نمی‌کنیم یا درج نمی‌کنیم.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">۳. امنیت اطلاعات</h2>
            <p className="text-muted leading-relaxed">
              ما رمزگذاری SSL و استانداردهای بین‌المللی برای حفاظت از اطلاعات شما استفاده می‌کنیم. سرورهای ما مدام نظارت می‌شوند.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">۴. حقوق شما</h2>
            <p className="text-muted leading-relaxed">
              شما می‌توانید درخواست دسترسی، اصلاح یا حذف اطلاعات خود را داشته باشید. برای این کار، با پشتیبانی تماس بگیرید.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">۵. تماس با ما</h2>
            <p className="text-muted leading-relaxed">
              اگر نگرانی‌های حریم خصوصی دارید، لطفاً با ما تماس بگیرید: privacy@ranking.ir
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
