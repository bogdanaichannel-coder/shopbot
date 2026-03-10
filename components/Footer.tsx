'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer style={{ backgroundColor: '#080810', borderTop: '1px solid #1c1c2e', padding: '2rem 0' }}>
      <div className="container-lg" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ fontFamily: 'Unbounded, sans-serif', fontSize: '1.05rem', fontWeight: 900, letterSpacing: '-0.04em', color: '#e8e8f8' }}>
          Shop<span style={{ color: '#5dffb0' }}>Bot</span>
        </div>
        <p style={{ fontSize: 12, color: '#5a5a7a' }}>{t('copy')}</p>
      </div>
    </footer>
  );
}
