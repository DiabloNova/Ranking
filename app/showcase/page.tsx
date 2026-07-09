"use client"

import * as React from "react"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { GlassCard } from "@/components/ui/glass-card"
import {
  GlassModal,
  GlassModalContent,
  GlassModalDescription,
  GlassModalFooter,
  GlassModalHeader,
  GlassModalTitle,
  GlassModalTrigger,
} from "@/components/ui/glass-modal"
import { Rocket, Shield, Zap, Layers, MousePointer2 } from "lucide-react"

export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] selection:bg-blue-500/30" dir="rtl">
      {/* Premium Radial Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a1931_0%,#02040a_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 space-y-32">
        {/* Header Overhaul */}
        <header className="space-y-6 text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">نسخه ۲.۴.۰</span>
          </div>
          <h1 className="text-6xl font-black tracking-tight sm:text-7xl">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">رابط کاربری</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">شیشه‌ای مایع</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/50 leading-relaxed font-medium">
            طراحی شده برای تجربه‌های کاربری لوکس. دارای فیزیک شیشه‌ای ۳بعدی، بازتاب‌های داینامیک و جلوه‌های هولوگرافیک.
          </p>
        </header>

        {/* 3D Capsule Buttons Section */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-white">دکمه‌های کپسولی ۳بعدی</h2>
              <p className="text-white/40 font-medium">دارای لایه‌های بازتابی و سایه‌های عمیق</p>
            </div>
            <MousePointer2 className="h-8 w-8 text-blue-400 opacity-50" />
          </div>

          <div className="grid gap-8 p-12 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl items-center justify-center md:flex md:flex-wrap">
            <div className="group relative">
                <GlassButton variant="primary" size="lg" className="w-full sm:w-auto">
                    <Rocket className="ml-2 h-5 w-5" />
                    شروع رایگان
                </GlassButton>
            </div>

            <GlassButton variant="vibrant" size="lg" className="w-full sm:w-auto">
              <Zap className="ml-2 h-5 w-5 fill-current" />
              ارتقاء به بیزنس
            </GlassButton>

            <GlassButton variant="ghost" size="lg" className="w-full sm:w-auto">
              مشاهده داکیومنت
            </GlassButton>
          </div>
        </section>

        {/* Glossy Inputs */}
        <section className="space-y-12">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white">ورودی‌های شفاف</h2>
            <p className="text-white/40 font-medium">ترکیب شیشه و نور با بازخورد لمسی</p>
          </div>

          <div className="grid gap-12 p-12 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl md:grid-cols-2">
            <div className="space-y-4">
              <label className="text-sm font-black text-white/70 mr-4">آدرس ایمیل</label>
              <GlassInput placeholder="name@company.com" />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-black text-white/70 mr-4">رمز عبور</label>
              <GlassInput type="password" placeholder="••••••••" />
            </div>
          </div>
        </section>

        {/* Iridescent Cards */}
        <section className="space-y-12 pb-20">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white">کارت‌های هولوگرافیک</h2>
            <p className="text-white/40 font-medium">مرزهای رنگین‌کمانی با بلور فوق‌العاده بالا</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "امنیت هوشمند", icon: Shield, color: "text-blue-400" },
              { title: "معماری لایه‌ای", icon: Layers, color: "text-purple-400" },
              { title: "عملکرد سریع", icon: Zap, color: "text-pink-400" }
            ].map((feature, i) => (
              <GlassCard key={i} withHolo withGlow className="p-10 group cursor-default">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-black text-white">{feature.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed">
                  تجربه بصری بی‌نظیر با استفاده از تکنیک‌های رندرینگ مدرن در مرورگر شما.
                </p>
                <div className="mt-8">
                  <GlassModal>
                    <GlassModalTrigger render={<GlassButton variant="primary" className="w-full" />}>
                        مشاهده جزئیات
                    </GlassModalTrigger>
                    <GlassModalContent>
                      <GlassModalHeader>
                        <GlassModalTitle className="text-3xl">تایید انتشار پکیج</GlassModalTitle>
                        <GlassModalDescription className="text-base">
                          آیا از انتشار این کامپوننت‌ها در کتابخانه اصلی اطمینان دارید؟
                        </GlassModalDescription>
                      </GlassModalHeader>

                      <div className="my-10 space-y-6">
                        <div className="rounded-3xl bg-white/5 p-6 border border-white/10 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-white/40 font-bold">وضعیت سیستم</span>
                                <span className="text-blue-400 font-black">پایدار</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            </div>
                        </div>
                      </div>

                      <GlassModalFooter>
                        <GlassButton variant="vibrant" className="flex-1">تایید نهایی</GlassButton>
                        <GlassButton variant="ghost" className="flex-1">بازگشت</GlassButton>
                      </GlassModalFooter>
                    </GlassModalContent>
                  </GlassModal>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
