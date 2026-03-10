'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const toggleLang = () => {
    const next = locale === 'ru' ? 'en' : 'ru';
    const segs = pathname.split('/');
    segs[1] = next;
    router.push(segs.join('/') || `/${next}`);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: scrolled ? 'rgba(8,8,16,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1c1c2e' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 clamp(1.25rem, 5vw, 2.5rem)',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ fontFamily: 'Unbounded, sans-serif', fontSize: '1.05rem', fontWeight: 900,
          letterSpacing: '-0.04em', color: '#e8e8f8', cursor: 'pointer',
          background: 'none', border: 'none', padding: 0 }}
      >
        Shop<span style={{ color: '#5dffb0' }}>Bot</span>
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}
        className="hidden md:flex">
        {(['demo', 'features', 'pricing'] as const).map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{ fontSize: 14, fontWeight: 600, color: '#5a5a7a',
              background: 'none', border: 'none', cursor: 'pointer',
              transition: 'color 0.2s', fontFamily: 'Manrope, sans-serif' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#5dffb0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#5a5a7a')}
          >
            {t(id)}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          onClick={toggleLang}
          style={{
            height: 36, padding: '0 14px', borderRadius: 10,
            backgroundColor: '#13131f', color: '#5a5a7a',
            border: '1px solid #1c1c2e', fontSize: 11, fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Manrope, sans-serif',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#5dffb0'; e.currentTarget.style.color = '#5dffb0'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#1c1c2e'; e.currentTarget.style.color = '#5a5a7a'; }}
        >
          {locale === 'ru' ? 'EN' : 'RU'}
        </button>
        <button
          onClick={() => scrollTo('order')}
          style={{
            height: 36, padding: '0 18px', borderRadius: 10,
            backgroundColor: '#5dffb0', color: '#080810',
            border: 'none', fontSize: 12, fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Manrope, sans-serif',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(93,255,176,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
        >
          {t('cta')}
        </button>
      </div>
    </nav>
  );
}
