'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Eye, EyeOff, Loader } from 'lucide-react'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [name,     setName]     = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')
  const [showPw,   setShowPw]   = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (mode === 'sign-up') {
        await authClient.signUp.email({ email, password, name })
      } else {
        await authClient.signIn.email({ email, password })
      }
      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا رخ داد. دوباره تلاش کنید.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', width: '100%' }}>

      {error && (
        <div
          role="alert"
          style={{
            padding: '0.85rem 1rem', borderRadius: '10px',
            backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)',
            fontSize: '0.9rem', color: '#ef4444', fontWeight: 600,
          }}
        >
          {error}
        </div>
      )}

      {mode === 'sign-up' && (
        <div>
          <label className="form-label" htmlFor="auth-name">نام و نام خانوادگی</label>
          <input
            id="auth-name"
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="نام خود را وارد کنید"
            autoComplete="name"
          />
        </div>
      )}

      <div>
        <label className="form-label" htmlFor="auth-email">ایمیل</label>
        <input
          id="auth-email"
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@email.com"
          autoComplete={mode === 'sign-in' ? 'email' : 'email'}
          dir="ltr"
        />
      </div>

      <div>
        <label className="form-label" htmlFor="auth-password">رمز عبور</label>
        <div style={{ position: 'relative' }}>
          <input
            id="auth-password"
            className="input-field"
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="رمز عبور خود را وارد کنید"
            autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
            dir="ltr"
            style={{ paddingLeft: '2.75rem' }}
          />
          <button
            type="button"
            onClick={() => setShowPw(!showPw)}
            aria-label={showPw ? 'پنهان کردن رمز عبور' : 'نمایش رمز عبور'}
            style={{
              position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', padding: '0.2rem',
            }}
          >
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center"
        style={{ padding: '0.85rem', fontSize: '1rem', marginTop: '0.25rem' }}
      >
        {loading
          ? <><Loader size={16} className="animate-spin" /> لطفاً صبر کنید...</>
          : mode === 'sign-up' ? 'ثبت‌نام' : 'ورود به حساب'}
      </button>
    </form>
  )
}
