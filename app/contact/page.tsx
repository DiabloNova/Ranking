'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تماس با ما | رنکینگ - خدمات سئو در ایران',
  description: 'تماس با تیم رنکینگ برای مشاوره رایگان سئو. شماره تماس: ۲۱-۹۱۲۱۲۳۴۵، ایمیل: info@ranking.ir',
  keywords: 'تماس رنکینگ, مشاوره سئو رایگان, شماره تماس, فرم تماس',
  alternates: { canonical: 'https://ranking.ir/contact' },
  openGraph: {
    title: 'تماس با رنکینگ',
    description: 'تماس با تیم متخصص سئو ما برای کسب مشاوره رایگان',
    url: 'https://ranking.ir/contact',
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitted(true)
    setLoading(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'ایمیل',
      value: 'info@ranking.ir',
      href: 'mailto:info@ranking.ir',
    },
    {
      icon: <Phone size={20} />,
      label: 'تلفن',
      value: '۰۲۱-۹۱۲۱۲۳۴۵',
      href: 'tel:+982191212345',
    },
    {
      icon: <MapPin size={20} />,
      label: 'آدرس',
      value: 'تهران، ایران',
      href: null,
    },
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 4rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg)', marginBottom: '1rem' }}>
            تماس با <span className="text-gradient">ما</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
            سوالی دارید؟ تیم ما آماده پاسخ‌گویی است
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 className="font-black" style={{ fontSize: '1.75rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>
                اطلاعات تماس
              </h2>
              {contactItems.map((item) => (
                <div key={item.label} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon-box" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="font-bold" style={{ color: 'var(--fg)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Working hours */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 className="font-bold" style={{ color: 'var(--fg)', marginBottom: '0.75rem' }}>
                  ساعات کاری
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    { day: 'شنبه تا چهارشنبه', hours: '۸:۰۰ — ۱۷:۰۰' },
                    { day: 'پنج‌شنبه',           hours: '۸:۰۰ — ۱۳:۰۰' },
                    { day: 'جمعه',              hours: 'تعطیل' },
                  ].map((r) => (
                    <div key={r.day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--muted)' }}>{r.day}</span>
                      <span className="font-bold" style={{ color: 'var(--fg)' }}>{r.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="card" style={{ padding: '2.5rem' }}>
                <h2 className="font-black" style={{ fontSize: '1.75rem', color: 'var(--fg)', marginBottom: '1.5rem' }}>
                  فرم تماس
                </h2>

                {submitted && (
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.9rem 1.25rem', borderRadius: '10px', marginBottom: '1.5rem',
                      backgroundColor: 'rgba(34, 197, 94, 0.08)',
                      border: '1px solid rgba(34, 197, 94, 0.35)',
                    }}
                  >
                    <CheckCircle size={18} className="status-success" />
                    <span className="font-semibold status-success">پیام شما با موفقیت ارسال شد</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div>
                    <label className="form-label" htmlFor="contact-name">نام و نام خانوادگی</label>
                    <input
                      id="contact-name"
                      className="input-field"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-email">ایمیل</label>
                    <input
                      id="contact-email"
                      className="input-field"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ایمیل خود را وارد کنید"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-phone">شماره تماس (اختیاری)</label>
                    <input
                      id="contact-phone"
                      className="input-field"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="شماره تماس خود را وارد کنید"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-message">پیام</label>
                    <textarea
                      id="contact-message"
                      className="input-field"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="پیام خود را بنویسید"
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                    style={{ padding: '0.85rem', fontSize: '1rem' }}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin" style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%' }} />
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        ارسال پیام
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
