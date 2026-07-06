'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ServiceCard {
  id: number
  title: string
  description: string
  image: string
  features: string[]
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'بهینه‌سازی موتور جستجو',
    description: 'افزایش رتبه سایت در گوگل و بهبود رؤیت‌پذیری آنلاین',
    image: '/service-seo.png',
    features: ['تحلیل کامل سایت', 'بک‌لینک باکیفیت', 'بهینه‌سازی محتوا'],
  },
  {
    id: 2,
    title: 'طراحی و بهینه‌سازی وب‌سایت',
    description: 'طراحی حرفه‌ای و سریع سایت برای تجربه بهتر کاربر',
    image: '/service-design.png',
    features: ['تجربه کاربری بهتر', 'سرعت بالا', 'طراحی ریسپانسیو'],
  },
  {
    id: 3,
    title: 'بازاریابی دیجیتال',
    description: 'استراتژی بازاریابی جامع برای رشد کسب‌وکار',
    image: '/service-marketing.png',
    features: ['تبلیغات دقیق‌هدفشده', 'تحلیل مشتری', 'بهبود فروش'],
  },
  {
    id: 4,
    title: 'تحلیل و گزارش‌دهی',
    description: 'ارائه گزارش‌های شفاف و قابل‌فهم از عملکرد سایت',
    image: '/service-analytics.png',
    features: ['داده‌های دقیق', 'گزارش‌های ماهانه', 'مشاوره متخصص'],
  },
]

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
    setIsAutoPlay(false)
  }

  const currentService = services[currentIndex]

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8" dir="rtl">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                {currentService.title}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {currentService.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/sign-up"
              className="inline-block glass-button glass-button-primary px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              شروع کنید
            </Link>
          </div>

          {/* Right side - Glassomorphic Card */}
          <div className="relative h-full flex items-center justify-center perspective">
            {/* Floating decorative elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md border border-white/20 animate-float"></div>
            <div className="absolute top-1/4 right-8 w-12 h-12 bg-primary/20 rounded-full backdrop-blur-md border border-primary/30 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-12 left-1/3 w-10 h-10 bg-secondary/20 rounded-full backdrop-blur-md border border-secondary/30 animate-float" style={{ animationDelay: '2s' }}></div>

            {/* Main service card */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
              
              <div className="relative w-full h-full bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                {/* Service image */}
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentService.title}</h3>
                  <p className="text-sm text-white/90">{currentService.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="glass-button p-3 rounded-full hover:bg-white/20 transition-all duration-300 text-foreground"
            aria-label="Previous service"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel indicators */}
          <div className="flex gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="glass-button p-3 rounded-full hover:bg-white/20 transition-all duration-300 text-foreground"
            aria-label="Next service"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {isAutoPlay ? 'خودکار' : 'دستی'} • تغییر هر 5 ثانیه
          </p>
        </div>
      </div>
    </div>
  )
}
