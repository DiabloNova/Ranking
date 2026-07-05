import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { AuthForm } from '@/components/auth-form'
import Link from 'next/link'
import { UserPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ثبت‌نام رایگان',
  description: 'همین الان در رنکینگ ثبت‌نام کنید و تحلیل سئوی سایت خود را شروع کنید.',
  robots: { index: false, follow: false },
}

export default async function SignUpPage() {
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
              <UserPlus size={22} />
            </div>
            <h1 className="font-black" style={{ fontSize: '1.75rem', color: 'var(--fg)', marginBottom: '0.35rem' }}>
              ثبت‌نام رایگان
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              یک حساب کاربری رایگان ایجاد کنید
            </p>
          </div>

          <AuthForm mode="sign-up" />

          <div className="divider" style={{ margin: '1.5rem 0' }} />

          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
            قبلاً ثبت‌نام کردید؟{' '}
            <Link href="/sign-in" style={{ color: 'var(--primary)', fontWeight: 700 }}>
              وارد شوید
            </Link>
          </p>
          <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
            <Link href="/" style={{ fontSize: '0.875rem', color: 'var(--muted)', display: 'inline-block' }}>
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
