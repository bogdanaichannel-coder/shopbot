'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

/* ─── DATA ─── */
const products = [
  { id: '1', name: 'Пицца Маргарита', nameEn: 'Margherita Pizza', price: 450, emoji: '🍕', cat: 'food', stock: true },
  { id: '2', name: 'Бургер Classic', nameEn: 'Classic Burger', price: 320, emoji: '🍔', cat: 'food', stock: true },
  { id: '3', name: 'Кола 0.5л', nameEn: 'Cola 0.5L', price: 120, emoji: '🥤', cat: 'drinks', stock: true },
  { id: '4', name: 'Сок апельсин', nameEn: 'Orange Juice', price: 95, emoji: '🧃', cat: 'drinks', stock: true },
  { id: '5', name: 'Шоколад Milka', nameEn: 'Milka Chocolate', price: 85, emoji: '🍫', cat: 'snacks', stock: true },
  { id: '6', name: 'Картофель фри', nameEn: 'French Fries', price: 180, emoji: '🍟', cat: 'snacks', stock: true },
];

const cats = [
  { id: 'food', nameRu: 'Еда', nameEn: 'Food', emoji: '🍕' },
  { id: 'drinks', nameRu: 'Напитки', nameEn: 'Drinks', emoji: '🥤' },
  { id: 'snacks', nameRu: 'Снеки', nameEn: 'Snacks', emoji: '🍫' },
];

const banners = [
  { titleRu: 'ЛЕТНЯЯ РАСПРОДАЖА −20%', titleEn: 'SUMMER SALE −20%', grad: 'linear-gradient(135deg,#667eea,#764ba2)', emoji: '☀️' },
  { titleRu: 'БЕСПЛАТНАЯ ДОСТАВКА', titleEn: 'FREE DELIVERY', grad: 'linear-gradient(135deg,#f093fb,#f5576c)', emoji: '🚚' },
];

type Screen = 'shop' | 'cart' | 'success';
type Cart = Record<string, number>;

/* ─── DYNAMIC ISLAND ─── */
function DynamicIsland() {
  return (
    <div className="flex justify-center items-end" style={{ height: 40, background: '#000' }}>
      <div
        style={{
          width: 126,
          height: 34,
          background: '#000',
          borderRadius: '0 0 22px 22px',
          border: '1.5px solid #1a1a2e',
          borderTop: 'none',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {/* Camera dot */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1a1a2e', border: '1px solid #222' }} />
        {/* Face ID dots */}
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#222' }} />
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#222' }} />
      </div>
    </div>
  );
}

/* ─── ADMIN SCREEN ─── */
function AdminScreen({ locale }: { locale: string }) {
  const isRu = locale === 'ru';
  return (
    <div style={{ background: '#f0f2f5', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>⚙️</div>
      <div style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: 18, color: '#1a1a2e', marginBottom: 6 }}>
        {isRu ? 'Администратор' : 'Administrator'}
      </div>
      <div style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center', lineHeight: 1.6 }}>
        {isRu ? 'Панель управления магазином' : 'Store management panel'}
      </div>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
        {[
          { icon: '📦', label: isRu ? 'Товары' : 'Products', sub: `${products.length} ${isRu ? 'шт.' : 'items'}`, bg: 'rgba(79,172,254,0.12)' },
          { icon: '📋', label: isRu ? 'Заказы' : 'Orders', sub: isRu ? '12 сегодня' : '12 today', bg: 'rgba(93,255,176,0.12)' },
          { icon: '🖼️', label: isRu ? 'Баннеры' : 'Banners', sub: `${banners.length} ${isRu ? 'активных' : 'active'}`, bg: 'rgba(192,132,252,0.12)' },
          { icon: '📊', label: isRu ? 'Аналитика' : 'Analytics', sub: 'Real-time', bg: 'rgba(255,215,0,0.12)' },
        ].map((item, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 14, padding: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 6 }}>{item.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#222' }}>{item.label}</div>
            <div style={{ fontSize: 10, color: '#9ca3af' }}>{item.sub}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, background: 'white', borderRadius: 14, padding: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', width: '100%' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#555', marginBottom: 8 }}>📊 {isRu ? 'Сегодня' : 'Today'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {[
            { num: '12', label: isRu ? 'Заказов' : 'Orders' },
            { num: isRu ? '8 400₽' : '$84', label: isRu ? 'Выручка' : 'Revenue' },
            { num: '34', label: isRu ? 'Клиентов' : 'Clients' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#f0f4ff', borderRadius: 10, padding: '8px 6px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: '#27A7E7' }}>{s.num}</div>
              <div style={{ fontSize: 9, color: '#9ca3af' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── USER SCREEN (SHOP) ─── */
function ShopScreen({ locale, cart, setCart, screen, setScreen }: {
  locale: string;
  cart: Cart;
  setCart: (c: Cart) => void;
  screen: Screen;
  setScreen: (s: Screen) => void;
}) {
  const isRu = locale === 'ru';
  const [activeCat, setActiveCat] = useState('all');
  const [bannerIdx, setBannerIdx] = useState(0);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const banner = banners[bannerIdx % banners.length];
  const filtered = activeCat === 'all' ? products : products.filter(p => p.cat === activeCat);
  const cartCount = Object.values(cart).reduce((s, v) => s + v, 0);
  const cartTotal = Object.entries(cart).reduce((s, [id, q]) => {
    const p = products.find(p => p.id === id);
    return s + (p ? p.price * q : 0);
  }, 0);

  const addToCart = (id: string) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
    const next = new Set(addedIds);
    next.add(id);
    setAddedIds(next);
    setTimeout(() => {
      setAddedIds(prev => { const n = new Set(prev); n.delete(id); return n; });
    }, 1200);
  };

  const updateQty = (id: string, q: number) => {
    const next = { ...cart };
    if (q <= 0) delete next[id]; else next[id] = q;
    setCart(next);
  };

  const Tabs = () => (
    <div style={{ display: 'flex', background: 'white', borderTop: '1px solid #e5e7eb', flexShrink: 0 }}>
      {[
        { key: 'shop', icon: '🏠', label: isRu ? 'Каталог' : 'Catalog' },
        { key: 'cart', icon: '🛒', label: isRu ? 'Корзина' : 'Cart', badge: cartCount > 0 ? cartCount : null },
        { key: 'orders', icon: '📦', label: isRu ? 'Заказы' : 'Orders' },
      ].map(tab => (
        <button
          key={tab.key}
          onClick={() => tab.key !== 'orders' && setScreen(tab.key as Screen)}
          style={{
            flex: 1, padding: '8px 4px', border: 'none', background: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            color: screen === tab.key ? '#27A7E7' : '#9ca3af', position: 'relative',
          }}
        >
          <span style={{ fontSize: 19, lineHeight: 1, position: 'relative' }}>
            {tab.icon}
            {tab.badge && (
              <span style={{
                position: 'absolute', top: 3, right: -9,
                background: '#ef4444', color: 'white', fontSize: 7, fontWeight: 700,
                borderRadius: 99, minWidth: 13, height: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2px',
              }}>{tab.badge}</span>
            )}
          </span>
          <span style={{ fontSize: 9, fontWeight: 600 }}>{tab.label}</span>
        </button>
      ))}
    </div>
  );

  if (screen === 'success') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 56 }}>🎉</div>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111' }}>{isRu ? 'Заказ оформлен!' : 'Order placed!'}</h3>
          <p style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.6 }}>
            {isRu ? 'В реальном боте клиент вводит адрес и способ оплаты. Вы получаете уведомление в Telegram.' : 'In a real bot, the customer enters address and payment method. You receive a notification in Telegram.'}
          </p>
          <div style={{ padding: 12, borderRadius: 14, background: '#f0fdf4', border: '1px solid #bbf7d0', textAlign: 'left', width: '100%' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#16a34a', marginBottom: 4 }}>📲 {isRu ? 'Уведомление:' : 'Notification:'}</div>
            <div style={{ fontSize: 10, color: '#15803d', lineHeight: 1.6 }}>🆕 {isRu ? 'Новый заказ #1042' : 'New order #1042'}<br />💰 {isRu ? 'Сумма: 690₽' : 'Total: $6.90'}</div>
          </div>
          <button
            onClick={() => { setCart({}); setScreen('shop'); }}
            style={{ padding: '10px 24px', borderRadius: 12, border: 'none', background: '#27A7E7', color: 'white', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}
          >
            ← {isRu ? 'В магазин' : 'Back to store'}
          </button>
        </div>
        <Tabs />
      </div>
    );
  }

  if (screen === 'cart') {
    const items = Object.entries(cart).map(([id, q]) => ({ p: products.find(p => p.id === id)!, q })).filter(x => x.p);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: '#27A7E7', flexShrink: 0 }}>
          <button onClick={() => setScreen('shop')} style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 700 }}>←</button>
          <span style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>🛒 {isRu ? 'Корзина' : 'Cart'}</span>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {items.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 260, gap: 12 }}>
              <span style={{ fontSize: 48 }}>🛒</span>
              <p style={{ fontSize: 13, color: '#9ca3af', fontWeight: 600 }}>{isRu ? 'Корзина пуста' : 'Cart is empty'}</p>
              <button onClick={() => setScreen('shop')} style={{ padding: '8px 20px', borderRadius: 12, border: 'none', background: '#27A7E7', color: 'white', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>
                {isRu ? 'В каталог' : 'To catalog'}
              </button>
            </div>
          ) : (
            <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {items.map(({ p, q }) => (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10, borderRadius: 14, background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <span style={{ fontSize: 24 }}>{p.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{isRu ? p.name : p.nameEn}</div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#27A7E7' }}>{p.price * q}₽</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <button onClick={() => updateQty(p.id, q - 1)} style={{ width: 24, height: 24, borderRadius: '50%', border: 'none', background: '#27A7E7', color: 'white', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ fontSize: 12, fontWeight: 700, minWidth: 16, textAlign: 'center' }}>{q}</span>
                    <button onClick={() => updateQty(p.id, q + 1)} style={{ width: 24, height: 24, borderRadius: '50%', border: 'none', background: '#27A7E7', color: 'white', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 14, background: 'white', fontSize: 13, fontWeight: 700 }}>
                <span>{isRu ? 'Итого:' : 'Total:'}</span>
                <span style={{ color: '#27A7E7' }}>{cartTotal}₽</span>
              </div>
              <button
                onClick={() => setScreen('success')}
                style={{ width: '100%', padding: 12, borderRadius: 14, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #27A7E7, #4facfe)', color: 'white', fontSize: 13, fontWeight: 700 }}
              >
                ✅ {isRu ? 'Оформить заказ' : 'Place order'}
              </button>
            </div>
          )}
        </div>
        <Tabs />
      </div>
    );
  }

  // Shop screen
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: '#27A7E7', flexShrink: 0 }}>
        <span style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>🛍️ {isRu ? 'Мой Магазин' : 'My Store'}</span>
      </div>

      {/* Banner */}
      <div
        onClick={() => setBannerIdx(i => i + 1)}
        style={{ height: 88, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer', background: banner.grad, flexShrink: 0 }}
      >
        <span style={{ color: 'white', fontWeight: 900, fontSize: 12, zIndex: 1, padding: '0 16px', textAlign: 'center' }}>
          {isRu ? banner.titleRu : banner.titleEn}
        </span>
        <span style={{ position: 'absolute', right: 12, fontSize: 36, opacity: 0.18 }}>{banner.emoji}</span>
        <div style={{ position: 'absolute', bottom: 6, display: 'flex', gap: 4 }}>
          {banners.map((_, i) => (
            <div key={i} style={{ height: 3, width: i === bannerIdx % banners.length ? 14 : 4, borderRadius: 99, background: 'rgba(255,255,255,0.7)', transition: 'width .2s' }} />
          ))}
        </div>
      </div>

      {/* Category chips */}
      <div className="cat-row" style={{ display: 'flex', gap: 6, padding: '8px 10px', overflowX: 'auto', flexShrink: 0 }}>
        <button
          onClick={() => setActiveCat('all')}
          style={{ padding: '5px 12px', borderRadius: 99, whiteSpace: 'nowrap', fontSize: 11, fontWeight: 600, cursor: 'pointer', border: `1.5px solid ${activeCat === 'all' ? '#27A7E7' : '#e5e7eb'}`, background: activeCat === 'all' ? '#27A7E7' : 'white', color: activeCat === 'all' ? 'white' : '#374151', transition: 'all 0.15s' }}
        >
          {isRu ? 'Все' : 'All'}
        </button>
        {cats.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            style={{ padding: '5px 12px', borderRadius: 99, whiteSpace: 'nowrap', fontSize: 11, fontWeight: 600, cursor: 'pointer', border: `1.5px solid ${activeCat === c.id ? '#27A7E7' : '#e5e7eb'}`, background: activeCat === c.id ? '#27A7E7' : 'white', color: activeCat === c.id ? 'white' : '#374151', transition: 'all 0.15s' }}
          >
            {c.emoji} {isRu ? c.nameRu : c.nameEn}
          </button>
        ))}
      </div>

      {/* Products */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '4px 10px 10px' }}>
          {filtered.map(p => (
            <div key={p.id} style={{ borderRadius: 14, overflow: 'hidden', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
              <div style={{ height: 68, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>{p.emoji}</div>
              <div style={{ padding: '7px 8px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{isRu ? p.name : p.nameEn}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#27A7E7', marginTop: 2 }}>{p.price}₽</div>
              </div>
              <button
                onClick={() => addToCart(p.id)}
                style={{ width: '100%', padding: '6px 0', border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 700, color: 'white', background: addedIds.has(p.id) ? '#10b981' : '#27A7E7', transition: 'background 0.2s' }}
              >
                {!p.stock ? (isRu ? 'Нет в наличии' : 'Out of stock') : addedIds.has(p.id) ? '✓ ' + (isRu ? 'Добавлено' : 'Added') : '+ ' + (isRu ? 'В корзину' : 'Add to cart')}
              </button>
            </div>
          ))}
        </div>
      </div>

      <Tabs />
    </div>
  );
}

/* ─── MAIN PHONE COMPONENT ─── */
export default function PhoneDemo() {
  const t = useTranslations('demo');
  const locale = useLocale();
  const [mode, setMode] = useState<'client' | 'admin'>('client');
  const [screen, setScreen] = useState<Screen>('shop');
  const [cart, setCart] = useState<Cart>({});

  const handleModeChange = (m: 'client' | 'admin') => {
    setMode(m);
    setScreen('shop');
  };

  return (
    <section style={{ backgroundColor: '#0f0f1a', borderTop: '1px solid #1c1c2e', borderBottom: '1px solid #1c1c2e', padding: '6rem 0' }} id="demo">
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2.5rem)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          {/* Left info */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[#5dffb0] mb-3.5 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(93,255,176,0.07)', border: '1px solid rgba(93,255,176,0.15)' }}>
              {t('tag')}
            </span>
            <h2 className="font-['Unbounded'] font-black tracking-[-0.04em] leading-[1.05] text-[#e8e8f8] mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
              {t('heading')}
            </h2>
            <p className="text-[0.95rem] text-[#a0a0c0] leading-[1.75] mb-8 max-w-[420px]">{t('sub')}</p>

            {/* Mode toggle */}
            <div style={{ display: 'inline-flex', padding: 4, borderRadius: 20, backgroundColor: '#080810', border: '1px solid #1c1c2e', marginBottom: 16 }}>
              <button
                onClick={() => handleModeChange('client')}
                className="px-5 py-2.5 rounded-[16px] font-bold text-sm transition-all cursor-pointer"
                style={{
                  background: mode === 'client' ? '#5dffb0' : 'transparent',
                  color: mode === 'client' ? '#080810' : '#5a5a7a',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                {t('btnClient')}
              </button>
              <button
                onClick={() => handleModeChange('admin')}
                className="px-5 py-2.5 rounded-[16px] font-bold text-sm transition-all cursor-pointer"
                style={{
                  background: mode === 'admin' ? '#5dffb0' : 'transparent',
                  color: mode === 'admin' ? '#080810' : '#5a5a7a',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                {t('btnAdmin')}
              </button>
            </div>
            <p className="text-[0.82rem] text-[#5a5a7a] leading-[1.6]">
              {mode === 'client' ? t('hintClient') : t('hintAdmin')}
            </p>
          </div>

          {/* iPhone */}
          <div className="mx-auto" style={{ position: 'relative', width: 300 }}>
            {/* Ambient glow */}
            <div
              style={{
                position: 'absolute', inset: 0, borderRadius: 48,
                background: 'linear-gradient(135deg, rgba(93,255,176,0.22), rgba(79,172,254,0.18))',
                filter: 'blur(50px)', transform: 'scale(0.88) translateY(28px)', zIndex: 0,
                animation: 'phoneGlow 3s ease-in-out infinite',
              }}
            />

            {/* iPhone shell */}
            <div
              style={{
                position: 'relative', zIndex: 1, width: 300,
                borderRadius: 48,
                background: 'linear-gradient(160deg, #1a1a2e 0%, #06060d 40%)',
                border: '2px solid #2a2a40',
                boxShadow: `
                  0 60px 120px rgba(0,0,0,0.8),
                  0 0 0 1px #020209,
                  inset 0 1px 0 rgba(255,255,255,0.06),
                  inset 0 -1px 0 rgba(255,255,255,0.02)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Side buttons (visual only) */}
              <div style={{ position: 'absolute', left: -3, top: 100, width: 3, height: 36, background: '#2a2a40', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: -3, top: 148, width: 3, height: 56, background: '#2a2a40', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: -3, top: 216, width: 3, height: 56, background: '#2a2a40', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', right: -3, top: 160, width: 3, height: 72, background: '#2a2a40', borderRadius: '0 2px 2px 0' }} />

              {/* Dynamic Island */}
              <DynamicIsland />

              {/* Screen */}
              <div
                className="phone-screen"
                style={{
                  background: '#f0f2f5',
                  minHeight: 560,
                  maxHeight: 560,
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                {mode === 'admin' ? (
                  <AdminScreen locale={locale} />
                ) : (
                  <ShopScreen
                    locale={locale}
                    cart={cart}
                    setCart={setCart}
                    screen={screen}
                    setScreen={setScreen}
                  />
                )}
              </div>

              {/* Home bar */}
              <div style={{ height: 30, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 124, height: 4, background: '#2a2a40', borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
