'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, X } from 'lucide-react'

export function SearchToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Neumorphic Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="search-toggle-btn"
        aria-label={isOpen ? 'بستن جستجو' : 'باز کردن جستجو'}
        aria-expanded={isOpen}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          border: 'none',
          background: 'var(--bg)',
          color: 'var(--fg)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isOpen
            ? 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.9)'
            : '2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.9)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          transform: isOpen ? 'scale(0.95)' : 'scale(1)',
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.92)'}
        onMouseUp={(e) => e.currentTarget.style.transform = isOpen ? 'scale(0.95)' : 'scale(1)'}
      >
        {isOpen ? <X size={18} /> : <Search size={18} />}
      </button>

      {/* Neumorphic Search Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '8px',
            width: '280px',
            background: 'var(--bg)',
            borderRadius: '14px',
            padding: '16px',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.08), -4px -4px 10px rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--border)',
            zIndex: 1000,
            animation: 'slideDown 0.2s ease',
          }}
          className="animate-in fade-in"
        >
          {/* Quick Links */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
              دسترسی سریع
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link
                href="/analyzer"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: 'transparent',
                }}
                className="hover:bg-[var(--bg-hover)]"
              >
                <Search size={16} />
                <span>ابزار تحلیل</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: 'transparent',
                }}
                className="hover:bg-[var(--bg-hover)]"
              >
                <span>ℹ</span>
                <span>درباره ما</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: 'transparent',
                }}
                className="hover:bg-[var(--bg-hover)]"
              >
                <span>✉</span>
                <span>تماس با ما</span>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--border)', margin: '12px 0' }} />

          {/* Search Input */}
          <div style={{ marginTop: '12px' }}>
            <input
              type="text"
              placeholder="جستجو در سایت..."
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--fg)',
                fontSize: '0.9rem',
                boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = 'inset 1px 1px 3px rgba(0, 0, 0, 0.05), 0 0 0 2px var(--primary)'
                e.currentTarget.style.borderColor = 'var(--primary)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'inset 1px 1px 3px rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .search-toggle-btn:hover {
          transform: scale(1.05);
        }

        .search-toggle-btn:active {
          transform: scale(0.92);
        }
      `}</style>
    </>
  )
}
