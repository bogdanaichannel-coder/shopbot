'use client';

import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

const CARDS = [
  { icon: '🛍️', labelKey: 'cardCatalog',   valKey: 'cardCatalogVal',   color: '#5dffb0', bg: 'rgba(93,255,176,0.12)',   delay: 0   },
  { icon: '🛒', labelKey: 'cardCart',      valKey: 'cardCartVal',      color: '#4facfe', bg: 'rgba(79,172,254,0.12)',   delay: 0.5 },
  { icon: '📊', labelKey: 'cardAnalytics', valKey: 'cardAnalyticsVal', color: '#c084fc', bg: 'rgba(192,132,252,0.12)', delay: 1   },
  { icon: '🚀', labelKey: 'cardLaunch',    valKey: 'cardLaunchVal',    color: '#ffd700', bg: 'rgba(255,215,0,0.12)',    delay: 1.5 },
] as const;

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
        backgroundColor: '#080810',
        backgroundImage: `
          linear-gradient(rgba(93,255,176,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(93,255,176,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }}
    >
      {/* Glow 1 */}
      <div style={{
        position: 'absolute', width: 700, height: 700, top: '-10%', left: '-15%',
        background: 'radial-gradient(circle, rgba(93,255,176,0.07) 0%, transparent 65%)',
        filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none',
      }} />
      {/* Glow 2 */}
      <div style={{
        position: 'absolute', width: 500, height: 500, top: '30%', right: '-10%',
        background: 'radial-gradient(circle, rgba(79,172,254,0.06) 0%, transparent 65%)',
        filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          padding: '5rem 0',
          alignItems: 'center',
        }}
          className="lg:grid-hero"
        >
          {/* ── Left ── */}
          <div>
            <AnimateIn>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 99,
                background: 'rgba(93,255,176,0.07)', border: '1px solid rgba(93,255,176,0.18)',
                fontSize: '0.72rem', fontWeight: 600, color: '#5dffb0',
                marginBottom: '1.5rem',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5dffb0', flexShrink: 0, animation: 'pulseDot 2s infinite' }} />
                {t('badge')}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1 style={{
                fontFamily: 'Unbounded, sans-serif',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.045em',
                lineHeight: 0.98,
                color: '#e8e8f8',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #5dffb0 0%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {t('title1')}
                </span>
                <br />{t('title2')}
                <br /><span style={{ color: '#4facfe' }}>{t('title3')}</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p style={{
                fontSize: '1.05rem', color: '#a0a0c0', lineHeight: 1.75,
                maxWidth: 500, marginBottom: '2.5rem',
              }}>
                {t('sub')}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    height: 48, padding: '0 28px', borderRadius: 14,
                    backgroundColor: '#5dffb0', color: '#080810',
                    border: 'none', fontFamily: 'Manrope, sans-serif',
                    fontSize: 14, fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(93,255,176,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  {t('btnDemo')}
                </button>
                <button
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    height: 48, padding: '0 28px', borderRadius: 14,
                    backgroundColor: 'transparent', color: '#e8e8f8',
                    border: '1px solid #252538', fontFamily: 'Manrope, sans-serif',
                    fontSize: 14, fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#5dffb0'; e.currentTarget.style.color = '#5dffb0'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#252538'; e.currentTarget.style.color = '#e8e8f8'; }}
                >
                  {t('btnOrder')}
                </button>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: floating cards ── */}
          <AnimateIn delay={0.4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '14px 16px', borderRadius: 20,
                    backgroundColor: '#13131f', border: '1px solid #1c1c2e',
                    animation: `float 4s ease-in-out ${card.delay}s infinite`,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', background: card.bg,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: '#5a5a7a' }}>{t(card.labelKey)}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: card.color }}>{t(card.valKey)}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
