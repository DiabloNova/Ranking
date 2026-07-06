import type { Metadata } from 'next'
import { ServiceCarousel } from '@/components/service-carousel'

export const metadata: Metadata = {
  title: 'تعرفه خدمات | رنکینگ - قیمت خدمات سئو',
  description: 'بسته‌های خدمات سئو و بازاریابی دیجیتال رنکینگ. طراحی وب‌سایت، بهینه‌سازی موتور جستجو، تبلیغات دیجیتال و تحلیل عملکرد.',
  keywords: 'تعرفه سئو, قیمت خدمات, بسته‌های سئو, قیمت‌گذاری, تبلیغات دیجیتال',
  alternates: { canonical: 'https://ranking.ir/pricing' },
  openGraph: {
    title: 'تعرفه خدمات سئو | رنکینگ',
    description: 'بسته‌های متنوع خدمات سئو و بازاریابی دیجیتال با قیمت‌های رقابتی',
    url: 'https://ranking.ir/pricing',
  },
}

export default function PricingPage() {
  return (
    <main>
      {/* Hero Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-16" dir="rtl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              تعرفه خدمات
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              بسته‌های متنوع خدمات سئو و بازاریابی دیجیتال برای رشد کسب‌وکار شما
            </p>
          </div>
        </div>
      </section>

      {/* Service Carousel */}
      <ServiceCarousel />

      {/* Additional Info Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'نتایج قابل‌اندازه‌گیری', description: 'ارائه گزارش‌های شفاف و قابل‌تحقق از نتایج' },
              { title: 'مشاوره رایگان', description: 'مشاوره تخصصی بدون هزینه برای انتخاب بسته مناسب' },
              { title: 'پشتیبانی ۲۴/۷', description: 'تیم پشتیبانی حرفه‌ای همیشه آماده کمک' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl text-center space-y-3"
                dir="rtl"
              >
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
