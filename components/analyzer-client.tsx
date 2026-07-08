'use client'

import { useState } from 'react'
import { Search, Loader, CheckCircle, AlertCircle, XCircle, Lightbulb } from 'lucide-react'

export function AnalyzerClient() {
  const [url, setUrl]       = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState<any>(null)
  const [error, setError]     = useState('')

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)

    try {
      let normalizedUrl = url.trim()
      if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
        normalizedUrl = `https://${normalizedUrl}`
      }

      let parsedUrl: URL
      try {
        parsedUrl = new URL(normalizedUrl)
      } catch {
        throw new Error('آدرس URL نامعتبر است. مثال: https://example.com')
      }

      const response = await fetch(`/api/proxy?url=${encodeURIComponent(normalizedUrl)}`)
      if (!response.ok) throw new Error('سایت قابل دسترس نیست یا اجازه دسترسی نمی‌دهد')

      const htmlContent = await response.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(htmlContent, 'text/html')

      const title          = doc.querySelector('title')?.textContent?.trim() || ''
      const description    = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''
      const h1Count        = doc.querySelectorAll('h1').length
      const h2Count        = doc.querySelectorAll('h2').length
      const imageCount     = doc.querySelectorAll('img').length
      const imagesNoAlt    = doc.querySelectorAll('img:not([alt])').length
      const hasSsl         = parsedUrl.protocol === 'https:'
      const isMobileReady  = !!doc.querySelector('meta[name="viewport"]')
      const hasCanonical   = !!doc.querySelector('link[rel="canonical"]')
      const hasOG          = !!doc.querySelector('meta[property^="og:"]')
      const hasSchema      = !!doc.querySelector('script[type="application/ld+json"]')
      const robotsMeta     = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || ''
      const isIndexable    = !robotsMeta.includes('noindex')

      let score = 40
      if (title) score += 5
      if (title.length >= 30 && title.length <= 60) score += 5
      if (description) score += 5
      if (description.length >= 100 && description.length <= 160) score += 5
      if (h1Count === 1) score += 5
      if (h2Count > 0) score += 5
      if (hasSsl) score += 5
      if (isMobileReady) score += 5
      if (hasCanonical) score += 5
      if (hasOG) score += 5
      if (hasSchema) score += 5
      if (imagesNoAlt === 0 && imageCount > 0) score += 5

      setResult({
        url: normalizedUrl, title: title || 'یافت نشد', description: description || 'یافت نشد',
        h1Count, h2Count, imageCount, imagesNoAlt, hasSsl, isMobileReady,
        hasCanonical, hasOG, hasSchema, isIndexable,
        score: Math.min(100, score),
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطای نامشخص')
    } finally {
      setLoading(false)
    }
  }

  const scoreColor = (s: number) =>
    s >= 80 ? 'score-high' : s >= 55 ? 'score-medium' : 'score-low'

  type Status = 'success' | 'warning' | 'error'
  const StatusIcon = ({ status }: { status: Status }) => {
    const props = { size: 18, strokeWidth: 2.5 }
    if (status === 'success') return <CheckCircle {...props} className="status-success" />
    if (status === 'warning') return <AlertCircle {...props} className="status-warning" />
    return <XCircle {...props} className="status-error" />
  }

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', padding: '5rem 0' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <Search size={13} />
            ابزار رایگان
          </div>
          <h1 className="font-black text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem' }}>
            تحلیلگر سئو رایگان
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
            آدرس سایت خود را وارد کنید و در چند ثانیه گزارش جامع سئو دریافت کنید
          </p>
        </div>

        {/* Search form */}
        <form onSubmit={handleAnalyze} style={{ marginBottom: '2.5rem' }}>
          <label htmlFor="analyze-url" className="form-label" style={{ marginBottom: '0.75rem' }}>
            آدرس وب‌سایت
          </label>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="search-bar" style={{ flex: 1, minWidth: '240px' }}>
              <Search size={18} style={{ color: 'var(--muted)', flexShrink: 0 }} aria-hidden="true" />
              <input
                id="analyze-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
                aria-label="آدرس سایت برای تحلیل"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
              aria-label={loading ? 'در حال تحلیل سایت' : 'شروع تحلیل سایت'}
            >
              {loading
                ? <><span className="animate-spin" style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%' }} /> تحلیل...</>
                : <><Search size={16} /> تحلیل سایت</>
              }
            </button>
          </div>
        </form>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <Loader size={40} className="animate-spin" style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--muted)' }}>در حال تحلیل سایت...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
              padding: '1.25rem 1.5rem', borderRadius: '12px', marginBottom: '2rem',
              backgroundColor: 'rgba(239, 68, 68, 0.07)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}
          >
            <XCircle size={20} className="status-error" style={{ flexShrink: 0 }} />
            <div>
              <p className="font-bold status-error" style={{ marginBottom: '0.2rem' }}>خطا</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="animate-fade-in">

            {/* Score card */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <h2 className="font-black" style={{ fontSize: '1.5rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>
                    امتیاز سئو
                  </h2>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', wordBreak: 'break-all' }}>{result.url}</p>
                </div>
                <div
                  className={`score-circle ${scoreColor(result.score)}`}
                  style={{ border: '3px solid', borderRadius: '50%', width: '7rem', height: '7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.25rem', fontWeight: 900, flexShrink: 0 }}
                  aria-label={`امتیاز سئو: ${result.score} از ۱۰۰`}
                >
                  {result.score}
                </div>
              </div>
            </div>

            {/* Detail grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'عنوان صفحه',        value: result.title,          status: (result.title !== 'یافت نشد') ? 'success' : 'error' as Status },
                { label: 'توضیحات متا',        value: result.description,    status: (result.description !== 'یافت نشد') ? 'success' : 'warning' as Status },
                { label: 'تعداد H1',           value: `${result.h1Count} عنوان`,  status: (result.h1Count === 1) ? 'success' : (result.h1Count === 0 ? 'error' : 'warning') as Status },
                { label: 'تعداد H2',           value: `${result.h2Count} عنوان`,  status: result.h2Count > 0 ? 'success' : 'warning' as Status },
                { label: 'گواهی SSL',          value: result.hasSsl ? 'فعال' : 'غیرفعال',  status: result.hasSsl ? 'success' : 'error' as Status },
                { label: 'سازگاری موبایل',    value: result.isMobileReady ? 'آماده' : 'آماده نیست',  status: result.isMobileReady ? 'success' : 'error' as Status },
                { label: 'Canonical URL',      value: result.hasCanonical ? 'تعریف‌شده' : 'تعریف نشده', status: result.hasCanonical ? 'success' : 'warning' as Status },
                { label: 'Open Graph',         value: result.hasOG ? 'موجود' : 'موجود نیست',          status: result.hasOG ? 'success' : 'warning' as Status },
                { label: 'Schema Markup',      value: result.hasSchema ? 'موجود' : 'موجود نیست',       status: result.hasSchema ? 'success' : 'warning' as Status },
                { label: 'قابل ایندکس',        value: result.isIndexable ? 'بله' : 'خیر',              status: result.isIndexable ? 'success' : 'error' as Status },
                { label: 'تصاویر',            value: `${result.imageCount} تصویر`,                     status: 'success' as Status },
                { label: 'تصاویر بدون alt',   value: `${result.imagesNoAlt} تصویر`,                    status: result.imagesNoAlt === 0 ? 'success' : 'warning' as Status },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.2rem' }}>{item.label}</div>
                    <div className="font-bold" style={{ color: 'var(--fg)', fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.value}
                    </div>
                  </div>
                  <StatusIcon status={item.status} />
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="icon-box"><Lightbulb size={18} /></div>
                <h3 className="font-black" style={{ fontSize: '1.2rem', color: 'var(--fg)' }}>توصیه‌های بهبود</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                {result.title === 'یافت نشد'     && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>عنوان صفحه (title tag) را تعریف کنید.</li>}
                {result.description === 'یافت نشد' && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>توضیحات متا (meta description) بین ۱۰۰ تا ۱۶۰ کاراکتر اضافه کنید.</li>}
                {result.h1Count === 0           && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>حداقل یک عنوان H1 به صفحه اضافه کنید.</li>}
                {result.h1Count > 1             && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>تنها یک H1 در صفحه داشته باشید.</li>}
                {!result.hasSsl                 && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>گواهی SSL (HTTPS) را فعال کنید.</li>}
                {!result.isMobileReady          && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>Viewport meta tag اضافه کنید تا سایت برای موبایل آماده شود.</li>}
                {!result.hasCanonical           && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>Canonical URL تعریف کنید تا از محتوای تکراری جلوگیری شود.</li>}
                {!result.hasOG                  && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>Open Graph tags برای بهبود اشتراک‌گذاری در شبکه‌های اجتماعی اضافه کنید.</li>}
                {!result.hasSchema              && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>Schema Markup (JSON-LD) برای نمایش بهتر در گوگل اضافه کنید.</li>}
                {result.imagesNoAlt > 0         && <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid var(--primary)' }}>برای {result.imagesNoAlt} تصویر بدون alt text، توضیح مناسب اضافه کنید.</li>}
                {result.score >= 80 && (
                  <li style={{ color: 'var(--muted)', fontSize: '0.9rem', paddingRight: '1rem', borderRight: '3px solid #22c55e' }}>
                    وضعیت سئوی سایت شما خوب است. برای بهبود بیشتر با تیم ما تماس بگیرید.
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
