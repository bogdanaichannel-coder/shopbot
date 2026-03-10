# ShopBot Landing — Next.js + next-intl

Полная копия лендинга ShopBot для Next.js 15 с поддержкой русского и английского языков, Tailwind CSS v4, shadcn/ui-совместимыми компонентами и анимациями.

## Стек

- **Next.js 15** (App Router)
- **next-intl ^4.8.3** (i18n, ru/en)
- **Tailwind CSS v4** (через `@tailwindcss/postcss`)
- **Framer Motion** (анимации)
- **TypeScript**

## Структура

```
shopbot/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Tailwind + custom keyframes
│   └── [locale]/
│       ├── layout.tsx      # Locale layout с NextIntlClientProvider
│       └── page.tsx        # Главная страница
├── components/
│   ├── Navbar.tsx          # Фиксированный navbar + переключатель языка
│   ├── AnimateIn.tsx       # Scroll-triggered анимации
│   ├── Hero.tsx            # Hero секция с floating cards
│   ├── StatsBar.tsx        # Статистика (4 колонки)
│   ├── Features.tsx        # Сетка возможностей
│   ├── PhoneDemo.tsx       # iPhone 16 Pro с Dynamic Island + интерактивная демка
│   ├── HowItWorks.tsx      # 3 шага
│   ├── Pricing.tsx         # 3 тарифных плана
│   ├── ContactForm.tsx     # Форма заявки
│   └── Footer.tsx          # Футер
├── messages/
│   ├── ru.json             # Русские переводы
│   └── en.json             # Английские переводы
├── i18n/
│   ├── routing.ts          # Локали и defaultLocale
│   └── request.ts          # getRequestConfig
├── middleware.ts            # next-intl middleware
├── next.config.ts          # Next.js + next-intl plugin
├── postcss.config.mjs      # Tailwind v4 postcss
└── tsconfig.json
```

## Запуск

```bash
npm install
npm run dev
```

Приложение доступно на:
- `http://localhost:3000/ru` — русская версия
- `http://localhost:3000/en` — английская версия

## Особенности

### iPhone с Dynamic Island
- Компонент `PhoneDemo.tsx` рендерит iPhone 16 Pro с настоящим Dynamic Island (камера + Face ID dots)
- Боковые кнопки (визуальные)
- Ambient glow с анимацией
- При выборе **"Покупатель"**: работающий Telegram Mini App (каталог, корзина, оформление заказа)
- При выборе **"Администратор"**: надпись "Администратор"/"Administrator" с панелью статистики

### Анимации
- `fadeUp` — scroll-triggered через IntersectionObserver
- `float` — плавающие hero-карточки
- `pulseDot` — пульсирующая точка в badge
- `phoneGlow` — пульсирующее свечение вокруг телефона

### i18n (next-intl v4)
- Все тексты в `messages/ru.json` и `messages/en.json`
- Переключатель языка в Navbar меняет URL (`/ru/` ↔ `/en/`)
- Внутри телефона-демки тексты тоже переключаются по локали
