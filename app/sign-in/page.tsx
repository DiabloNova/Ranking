import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { AuthForm } from '@/components/auth-form'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ورود به حساب کاربری',
  description: 'وارد حساب کاربری رنکینگ شوید و به داشبورد سئوی خود دسترسی پیدا کنید.',
  robots: { index: false, follow: false },
}

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect('/dashboard')

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div className="card" style={{ padding: '2.5rem' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="icon-box" style={{ margin: '0 auto 1rem', width: 48, height: 48 }}>
              <ShieldCheck size={22} />
            </div>
            <h1 className="font-black" style={{ fontSize: '1.75rem', color: 'var(--fg)', marginBottom: '0.35rem' }}>
              ورود به حساب
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              به حساب کاربری رنکینگ وارد شوید
            </p>
          </div>

          <AuthForm mode="sign-in" />

          <div className="divider" style={{ margin: '1.5rem 0' }} />

          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
            حساب ندارید؟{' '}
            <Link href="/sign-up" style={{ color: 'var(--primary)', fontWeight: 700 }}>
              ثبت‌نام رایگان
            </Link>
          </p>
          <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
            <Link
              href="/"
              style={{ fontSize: '0.875rem', color: 'var(--muted)', display: 'inline-block' }}
            >
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
