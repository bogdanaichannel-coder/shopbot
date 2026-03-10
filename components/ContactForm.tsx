'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

const FIELD_STYLE: React.CSSProperties = {
  width: '100%', height: 52, padding: '0 16px',
  borderRadius: 12, fontSize: 14, fontFamily: 'Manrope, sans-serif',
  fontWeight: 500, color: '#e8e8f8',
  backgroundColor: '#080810', border: '1px solid #1c1c2e',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  appearance: 'none' as const,
};

function Field({ style, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      style={{ ...FIELD_STYLE, ...style }}
      onFocus={e => { e.currentTarget.style.borderColor = '#5dffb0'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(93,255,176,0.08)'; }}
      onBlur={e => { e.currentTarget.style.borderColor = '#1c1c2e'; e.currentTarget.style.boxShadow = 'none'; }}
      {...props}
    />
  );
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      style={{ ...FIELD_STYLE, cursor: 'pointer', backgroundColor: '#080810' }}
      onFocus={e => { e.currentTarget.style.borderColor = '#5dffb0'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(93,255,176,0.08)'; }}
      onBlur={e => { e.currentTarget.style.borderColor = '#1c1c2e'; e.currentTarget.style.boxShadow = 'none'; }}
      {...props}
    >
      {children}
    </select>
  );
}

export default function ContactForm() {
  const t = useTranslations('form');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [tg,   setTg]   = useState('');
  const [shop, setShop] = useState('');
  const [type, setType] = useState('');
  const [plan, setPlan] = useState('');

  const submit = () => {
    if (!name.trim() || !tg.trim()) { alert(t('alertEmpty')); return; }
    setSubmitted(true);
  };

  return (
    <section id="order" style={{ backgroundColor: '#13131f', borderTop: '1px solid #1c1c2e', padding: '6rem 0' }}>
      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
          className="form-grid-responsive">

          {/* ── Left ── */}
          <AnimateIn>
            <span className="tag">{t('tag')}</span>
            <h2 className="heading" style={{ marginBottom: '1rem' }}>{t('heading')}</h2>
            <p className="subtext" style={{ marginBottom: '2rem' }}>{t('sub')}</p>

            <div>
              {[t('t1'), t('t2'), t('t3')].map((item, i, arr) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0', fontSize: '0.875rem', color: '#a0a0c0',
                  borderBottom: i < arr.length - 1 ? '1px solid #1c1c2e' : 'none',
                }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.slice(0, 2)}</span>
                  {item.slice(2)}
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* ── Right ── */}
          <AnimateIn delay={0.15}>
            {!submitted ? (
              <div style={{
                padding: '2rem', borderRadius: 28,
                backgroundColor: '#080810', border: '1px solid #1c1c2e',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <Field type="text" placeholder={t('fname')} value={name} onChange={e => setName(e.target.value)} />
                <Field type="text" placeholder={t('ftg')}   value={tg}   onChange={e => setTg(e.target.value)} />
                <Field type="text" placeholder={t('fshop')} value={shop} onChange={e => setShop(e.target.value)} />

                <Select value={type} onChange={e => setType(e.target.value)}>
                  <option value="" disabled>{t('ftype')}</option>
                  {(['ftype1','ftype2','ftype3','ftype4','ftype5','ftype6'] as const).map(k => (
                    <option key={k} value={k}>{t(k)}</option>
                  ))}
                </Select>

                <Select value={plan} onChange={e => setPlan(e.target.value)}>
                  <option value="" disabled>{t('fplan')}</option>
                  {(['fplan1','fplan2','fplan3','fplan4'] as const).map(k => (
                    <option key={k} value={k}>{t(k)}</option>
                  ))}
                </Select>

                <button
                  onClick={submit}
                  style={{
                    width: '100%', height: 56, borderRadius: 12, marginTop: 4,
                    backgroundColor: '#5dffb0', color: '#080810',
                    border: 'none', fontFamily: 'Manrope, sans-serif',
                    fontSize: 16, fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(93,255,176,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  {t('submit')}
                </button>
              </div>
            ) : (
              <div style={{
                padding: '2.5rem', borderRadius: 28,
                backgroundColor: '#080810', border: '1px solid rgba(93,255,176,0.3)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 16, textAlign: 'center',
                boxShadow: '0 0 60px rgba(93,255,176,0.1)',
              }}>
                <div style={{ fontSize: 56 }}>🎉</div>
                <p style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: 20, color: '#e8e8f8' }}>{t('successTitle')}</p>
                <p style={{ fontSize: '0.95rem', color: '#a0a0c0', lineHeight: 1.75 }}>{t('successText')}</p>
              </div>
            )}
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
