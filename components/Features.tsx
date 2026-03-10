'use client';

import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

const FEATURES = [
  { icon: '🛍️', titleKey: 'f1title', descKey: 'f1desc', accent: '#5dffb0', wide: true  },
  { icon: '🛒', titleKey: 'f2title', descKey: 'f2desc', accent: '#4facfe', wide: false },
  { icon: '📊', titleKey: 'f3title', descKey: 'f3desc', accent: '#c084fc', wide: false },
  { icon: '🔔', titleKey: 'f4title', descKey: 'f4desc', accent: '#ffd700', wide: false },
  { icon: '💳', titleKey: 'f5title', descKey: 'f5desc', accent: '#5dffb0', wide: false },
  { icon: '🖼️', titleKey: 'f6title', descKey: 'f6desc', accent: '#4facfe', wide: true  },
] as const;

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" style={{ backgroundColor: '#080810', padding: '6rem 0' }}>
      <div className="container-lg">

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <AnimateIn><span className="tag">{t('tag')}</span></AnimateIn>
            <AnimateIn delay={0.1}><h2 className="heading">{t('heading')}</h2></AnimateIn>
          </div>
          <AnimateIn delay={0.2}>
            <p className="subtext" style={{ maxWidth: 360 }}>{t('sub')}</p>
          </AnimateIn>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}
          className="features-grid-responsive">
          {FEATURES.map((f, i) => (
            <AnimateIn
              key={i}
              delay={i * 0.08}
              className={f.wide ? 'feat-wide' : ''}
            >
              <FeatureCard f={f} t={t} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ f, t }: { f: typeof FEATURES[number]; t: ReturnType<typeof useTranslations<'features'>> }) {
  return (
    <div
      style={{
        padding: '2rem', borderRadius: 20, height: '100%',
        backgroundColor: '#13131f', border: '1px solid #1c1c2e',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.25s, border-color 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = '#252538';
        (e.currentTarget.querySelector('.feat-topline') as HTMLElement).style.opacity = '1';
        (e.currentTarget.querySelector('.feat-glow') as HTMLElement).style.opacity = '1';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.borderColor = '#1c1c2e';
        (e.currentTarget.querySelector('.feat-topline') as HTMLElement).style.opacity = '0';
        (e.currentTarget.querySelector('.feat-glow') as HTMLElement).style.opacity = '0';
      }}
    >
      {/* accent top line */}
      <div className="feat-topline" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${f.accent}, transparent)`,
        opacity: 0, transition: 'opacity 0.3s',
      }} />
      {/* glow */}
      <div className="feat-glow" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at top left, ${f.accent}12, transparent 60%)`,
        opacity: 0, transition: 'opacity 0.3s', borderRadius: 20,
      }} />

      <div style={{
        width: 50, height: 50, borderRadius: 15, marginBottom: '1.2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', background: `${f.accent}1a`, position: 'relative',
      }}>
        {f.icon}
      </div>
      <p style={{ fontFamily: 'Unbounded, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#e8e8f8', marginBottom: 8, position: 'relative' }}>
        {t(f.titleKey)}
      </p>
      <p style={{ fontSize: '0.875rem', color: '#a0a0c0', lineHeight: 1.7, position: 'relative' }}>
        {t(f.descKey)}
      </p>
    </div>
  );
}
