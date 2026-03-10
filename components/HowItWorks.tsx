'use client';

import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

const STEPS = [
  { icon: '📋', num: '1', accent: '#5dffb0', titleKey: 's1title', descKey: 's1desc' },
  { icon: '⚙️', num: '2', accent: '#4facfe', titleKey: 's2title', descKey: 's2desc' },
  { icon: '🚀', num: '3', accent: '#c084fc', titleKey: 's3title', descKey: 's3desc' },
] as const;

export default function HowItWorks() {
  const t = useTranslations('hiw');

  return (
    <section style={{ backgroundColor: '#13131f', borderTop: '1px solid #1c1c2e', borderBottom: '1px solid #1c1c2e', padding: '6rem 0' }}>
      <div className="container-lg">
        <div style={{ marginBottom: '3.5rem' }}>
          <AnimateIn><span className="tag">{t('tag')}</span></AnimateIn>
          <AnimateIn delay={0.1}><h2 className="heading">{t('heading')}</h2></AnimateIn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', position: 'relative' }}
          className="steps-grid-responsive">
          {/* connector line */}
          <div style={{
            position: 'absolute', top: 44, left: '18%', right: '18%', height: 1,
            background: 'linear-gradient(90deg, rgba(93,255,176,0.3), rgba(79,172,254,0.3), rgba(192,132,252,0.3))',
          }} className="steps-line-hide" />

          {STEPS.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div>
                <div
                  style={{
                    width: 80, height: 80, borderRadius: 22, position: 'relative',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem', marginBottom: '1.2rem',
                    background: `${s.accent}1a`, border: `1px solid ${s.accent}33`,
                    transition: 'transform 0.2s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07) rotate(3deg)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                >
                  {s.icon}
                  <span style={{
                    position: 'absolute', top: -8, right: -8,
                    width: 26, height: 26, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Unbounded, sans-serif', fontSize: '0.6rem', fontWeight: 900,
                    color: '#080810', background: s.accent,
                  }}>
                    {s.num}
                  </span>
                </div>
                <p style={{ fontFamily: 'Unbounded, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#e8e8f8', marginBottom: 8 }}>
                  {t(s.titleKey)}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#a0a0c0', lineHeight: 1.7 }}>
                  {t(s.descKey)}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
