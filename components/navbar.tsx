'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <div className="theme-toggle" aria-hidden="true" />
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'تغییر به تم روشن' : 'تغییر به تم تاریک'}
    >
      {theme === 'dark'
        ? <Sun size={16} strokeWidth={2.2} />
        : <Moon size={16} strokeWidth={2.2} />}
    </button>
  )
}

const navLinks = [
  { href: '/',         label: 'خانه' },
  { href: '/pricing',  label: 'تعرفه خدمات' },
  { href: '/about',    label: 'درباره ما' },
  { href: '/analyzer', label: 'ابزار تحلیل' },
  { href: '/contact',  label: 'تماس با ما' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="navbar sticky top-0 z-50" role="navigation" aria-label="منوی اصلی">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">

          {/* Logo — shimmer text, no image */}
          <Link href="/" className="flex-shrink-0" aria-label="رنکینگ — صفحه اصلی">
            <span className="logo-shimmer font-black text-2xl tracking-tight select-none">
              رنکینگ
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <Link href="/sign-in" className="btn-ghost text-sm px-3 py-2">
              ورود
            </Link>
            <Link href="/sign-up" className="btn-primary text-sm px-4 py-2">
              ثبت‌نام رایگان
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-ghost p-2"
              aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X size={20} strokeWidth={2} style={{ color: 'var(--fg)' }} />
                : <Menu size={20} strokeWidth={2} style={{ color: 'var(--fg)' }} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden pb-5 pt-3 flex flex-col gap-1" style={{ borderTop: '1px solid var(--border)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="divider my-2" />
            <Link href="/sign-in" className="btn-ghost w-full justify-center py-2" onClick={() => setMobileOpen(false)}>
              ورود
            </Link>
            <Link href="/sign-up" className="btn-primary w-full justify-center py-2 mt-1" onClick={() => setMobileOpen(false)}>
              ثبت‌نام رایگان
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
