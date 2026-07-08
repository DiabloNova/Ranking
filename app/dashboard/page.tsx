'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { useSession } from '@/lib/auth-client'
import { getAnalysisHistory, deleteAnalysis, analyzeWebsite } from '@/app/actions/seo'
import { Trash2, Plus, Loader, Search, BarChart3, Shield, Smartphone, CheckCircle, XCircle } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, isPending } = useSession()
  const [analyses,  setAnalyses]  = useState<any[]>([])
  const [loading,   setLoading]   = useState(true)
  const [url,       setUrl]       = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const [error,     setError]     = useState('')

  useEffect(() => {
    if (!isPending && !session?.user) redirect('/sign-in')
  }, [session, isPending])

  useEffect(() => {
    if (session?.user) loadAnalyses()
  }, [session?.user])

  const loadAnalyses = async () => {
    try {
      setLoading(true)
      const data = await getAnalysisHistory()
      setAnalyses(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در بارگذاری داده')
    } finally {
      setLoading(false)
    }
  }

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault()
    setAnalyzing(true)
    setError('')
    try {
      const result = await analyzeWebsite(url)
      setAnalyses([result, ...analyses])
      setUrl('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در تجزیه')
    } finally {
      setAnalyzing(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteAnalysis(id)
      setAnalyses(analyses.filter((a) => a.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در حذف')
    }
  }

  const scoreStyle = (s: number) =>
    s >= 80 ? 'score-high' : s >= 55 ? 'score-medium' : 'score-low'

  if (isPending) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader size={36} className="animate-spin" style={{ color: 'var(--primary)' }} />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', padding: '4rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 className="font-black" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--fg)', marginBottom: '0.4rem' }}>
            خوش آمدید،{' '}
            <span className="text-gradient">{session?.user?.name || 'کاربر'}</span>!
          </h1>
          <p style={{ color: 'var(--muted)' }}>مدیریت تحلیل‌های سئو و تاریخچه فعالیت‌ها</p>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            style={{
              padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem',
              backgroundColor: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.3)',
              color: '#ef4444', fontWeight: 600, fontSize: '0.9rem',
            }}
          >
            {error}
          </div>
        )}

        {/* New analysis form */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
          <h2 className="font-black" style={{ fontSize: '1.25rem', color: 'var(--fg)', marginBottom: '1rem' }}>
            تحلیل جدید
          </h2>
          <form onSubmit={handleAnalyze} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="search-bar" style={{ flex: 1, minWidth: '240px' }}>
              <Search size={16} style={{ color: 'var(--muted)', flexShrink: 0 }} aria-hidden="true" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
                aria-label="آدرس سایت برای تحلیل"
              />
            </div>
            <button
              type="submit"
              disabled={analyzing}
              className="btn-primary"
              aria-label={analyzing ? 'در حال تحلیل سایت' : 'شروع تحلیل جدید'}
            >
              {analyzing
                ? <><Loader size={15} className="animate-spin" /> در حال تحلیل...</>
                : <><Plus size={16} /> تحلیل</>}
            </button>
          </form>
        </div>

        {/* Stats summary */}
        {analyses.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginBottom: '2.5rem' }}>
            {[
              { icon: <BarChart3 size={18} />,  label: 'کل تحلیل‌ها',           value: analyses.length },
              { icon: <Search size={18} />,     label: 'میانگین امتیاز',        value: Math.round(analyses.reduce((s, a) => s + a.score, 0) / analyses.length) || 0 },
              { icon: <Smartphone size={18} />, label: 'سازگار با موبایل',      value: analyses.filter((a) => a.mobileReady).length },
              { icon: <Shield size={18} />,     label: 'SSL فعال',               value: analyses.filter((a) => a.sslCertificate).length },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div className="icon-box" style={{ margin: '0 auto 0.75rem' }} aria-hidden="true">{s.icon}</div>
                <div className="font-black text-gradient" style={{ fontSize: '1.75rem' }}>{s.value}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* History */}
        <h2 className="font-black" style={{ fontSize: '1.35rem', color: 'var(--fg)', marginBottom: '1rem' }}>
          تاریخچه تحلیل‌ها
        </h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Loader size={36} className="animate-spin" style={{ color: 'var(--primary)', margin: '0 auto' }} />
          </div>
        ) : analyses.length === 0 ? (
          <div className="card" style={{ padding: '4rem', textAlign: 'center' }}>
            <BarChart3 size={40} style={{ color: 'var(--muted)', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>هنوز تحلیلی انجام نشده</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>سایت خود را در فرم بالا وارد کنید</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {analyses.map((analysis) => (
              <div key={analysis.id} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h3 className="font-bold" style={{ color: 'var(--fg)', marginBottom: '0.3rem', fontSize: '1rem' }}>
                      {analysis.title || 'بدون عنوان'}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem', wordBreak: 'break-all' }}>
                      {analysis.website}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { label: 'H1',     val: analysis.headings?.h1 ?? 0 },
                        { label: 'SSL',    val: analysis.sslCertificate ? <CheckCircle size={14} className="status-success" /> : <XCircle size={14} className="status-error" /> },
                        { label: 'موبایل', val: analysis.mobileReady ? <CheckCircle size={14} className="status-success" /> : <XCircle size={14} className="status-error" /> },
                        { label: 'تاریخ',  val: new Date(analysis.createdAt).toLocaleDateString('fa-IR') },
                      ].map((item) => (
                        <div key={item.label} style={{ backgroundColor: 'var(--tag-bg)', borderRadius: '8px', padding: '0.4rem 0.6rem' }}>
                          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.15rem' }}>{item.label}</div>
                          <div style={{ fontWeight: 700, color: 'var(--fg)', fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>{item.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                    <div
                      className={`score-circle ${scoreStyle(analysis.score)}`}
                      style={{ width: '4.5rem', height: '4.5rem', borderRadius: '50%', border: '2px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 900 }}
                      aria-label={`امتیاز: ${Math.round(analysis.score)}`}
                    >
                      {Math.round(analysis.score)}
                    </div>
                    <button
                      onClick={() => handleDelete(analysis.id)}
                      aria-label="حذف تحلیل"
                      style={{
                        background: 'none', border: '1px solid transparent', borderRadius: '8px',
                        padding: '0.5rem', cursor: 'pointer', color: 'var(--muted)',
                        transition: 'color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = '#ef4444'
                        ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239,68,68,0.08)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = 'var(--muted)'
                        ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
