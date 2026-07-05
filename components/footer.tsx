'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Share2 } from 'lucide-react'

const footerLinks = {
  product: [
    { href: '/analyzer', label: 'ابزار تحلیل رایگان' },
    { href: '/dashboard', label: 'پنل کاربری' },
  ],
  company: [
    { href: '/about',   label: 'درباره ما' },
    { href: '/contact', label: 'تماس با ما' },
  ],
  legal: [
    { href: '/terms',   label: 'شرایط استفاده' },
    { href: '/privacy', label: 'حریم خصوصی' },
  ],
}

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', marginTop: '2rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span className="logo-shimmer font-black text-xl" style={{ display: 'inline-block' }}>
              رنکینگ
            </span>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
              متخصصان بهینه‌سازی موتورهای جستجو در ایران. افزایش رتبه، افزایش درآمد.
            </p>
            {/* Local SEO — contact info for Google */}
            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
            >
              <meta itemProp="name" content="رنکینگ" />
              <meta itemProp="url" content="https://ranking.ir" />
              <a
                href="tel:+982191212345"
                itemProp="telephone"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--muted)' }}
              >
                <Phone size={13} style={{ color: 'var(--primary)' }} />
                ۰۲۱-۹۱۲۱۲۳۴۵
              </a>
              <a
                href="mailto:info@ranking.ir"
                itemProp="email"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--muted)' }}
              >
                <Mail size={13} style={{ color: 'var(--primary)' }} />
                info@ranking.ir
              </a>
              <span
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--muted)' }}
              >
                <MapPin size={13} style={{ color: 'var(--primary)' }} />
                <span itemProp="addressLocality">تهران</span>،{' '}
                <span itemProp="addressCountry">ایران</span>
              </span>
            </address>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)', marginBottom: '1rem' }}>
              محصولات
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0 }}>
              {footerLinks.product.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--primary)' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--muted)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)', marginBottom: '1rem' }}>
              شرکت
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0 }}>
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--primary)' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--muted)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)', marginBottom: '1rem' }}>
              حقوقی
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--primary)' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--muted)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a
                href="https://instagram.com/ranking_seo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام رنکینگ"
                className="theme-toggle"
                style={{ width: 36, height: 36 }}
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://t.me/ranking_seo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام رنکینگ"
                className="theme-toggle"
                style={{ width: 36, height: 36, fontWeight: 700, fontSize: '0.8rem' }}
              >
                T
              </a>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '1.25rem' }} />
        <p style={{ textAlign: 'center', fontSize: '0.825rem', color: 'var(--muted)' }}>
          © ۱۴۰۴ رنکینگ. تمام حقوق محفوظ است. |{' '}
          <Link href="/sitemap.xml" style={{ color: 'var(--muted)' }}>نقشه سایت</Link>
        </p>
      </div>
    </footer>
  )
}
