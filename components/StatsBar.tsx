'use client';

import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats = [
    { num: t('s1num'), label: t('s1label') },
    { num: t('s2num'), label: t('s2label') },
    { num: t('s3num'), label: t('s3label') },
    { num: t('s4num'), label: t('s4label') },
  ];

  return (
    <div style={{ backgroundColor: '#13131f', borderTop: '1px solid #1c1c2e', borderBottom: '1px solid #1c1c2e' }}>
      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          className="stats-grid-responsive">
          {stats.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', padding: '2.5rem 1rem',
                borderRight: i < 3 ? '1px solid #1c1c2e' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Unbounded, sans-serif',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 900, color: '#5dffb0', letterSpacing: '-0.03em',
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#5a5a7a', marginTop: 4, textAlign: 'center' }}>
                  {s.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
