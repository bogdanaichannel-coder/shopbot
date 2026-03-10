'use client'

import { useTranslations } from 'next-intl'
import { HiStar } from 'react-icons/hi2'
import AnimateIn from './AnimateIn'

export default function Pricing() {
	const t = useTranslations('pricing')
	const scrollToOrder = () =>
		document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })

	const plans = [
		{
			name: t('p1name'),
			price: t('p1price'),
			accent: '#4facfe',
			popular: false,
			outline: true,
			priceSmall: false,
			features: ['p1f1', 'p1f2', 'p1f3', 'p1f4', 'p1f5'] as const,
			btn: t('p1btn'),
		},
		{
			name: t('p2name'),
			price: t('p2price'),
			accent: '#5dffb0',
			popular: true,
			outline: false,
			priceSmall: false,
			badge: t('p2badge'),
			features: ['p2f1', 'p2f2', 'p2f3', 'p2f4', 'p2f5', 'p2f6'] as const,
			btn: t('p2btn'),
		},
		{
			name: t('p3name'),
			price: t('p3price'),
			accent: '#c084fc',
			popular: false,
			outline: true,
			priceSmall: true,
			features: ['p3f1', 'p3f2', 'p3f3', 'p3f4', 'p3f5'] as const,
			btn: t('p3btn'),
		},
	]

	return (
		<section
			id='pricing'
			style={{ backgroundColor: '#080810', padding: '6rem 0' }}
		>
			<div className='container-lg'>
				<div style={{ marginBottom: '3.5rem' }}>
					<AnimateIn>
						<span className='tag'>{t('tag')}</span>
					</AnimateIn>
					<AnimateIn delay={0.1}>
						<h2 className='heading' style={{ marginBottom: '.5rem' }}>
							{t('heading')}
						</h2>
					</AnimateIn>
					<AnimateIn delay={0.2}>
						<p className='subtext'>{t('sub')}</p>
					</AnimateIn>
				</div>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gap: 14,
						alignItems: 'start',
					}}
					className='pricing-grid-responsive'
				>
					{plans.map((plan, i) => (
						<AnimateIn key={i} delay={i * 0.1}>
							<div
								style={{
									borderRadius: 28,
									backgroundColor: '#13131f',
									border: `1px solid ${plan.popular ? plan.accent : '#1c1c2e'}`,
									padding: '2rem',
									position: 'relative',
									marginTop: plan.popular ? -16 : 0,
									boxShadow: plan.popular
										? '0 0 60px rgba(93,255,176,0.12)'
										: 'none',
									transition: 'transform 0.25s',
								}}
								onMouseEnter={e => {
									e.currentTarget.style.transform = 'translateY(-6px)'
								}}
								onMouseLeave={e => {
									e.currentTarget.style.transform = ''
								}}
							>
								{/* top line */}
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										height: 2,
										background: `linear-gradient(90deg, transparent, ${plan.accent}, transparent)`,
									}}
								/>

								{plan.popular && plan.badge && (
									<div
										style={{
											position: 'absolute',
											top: -14,
											left: '50%',
											transform: 'translateX(-50%)',
											display: 'flex',
											alignItems: 'center',
											gap: 6,
											padding: '6px 14px',
											borderRadius: 999,
											fontSize: '0.7rem',
											fontWeight: 800,
											background: plan.accent,
											color: '#080810',
											whiteSpace: 'nowrap',
											boxShadow: `0 10px 25px ${plan.accent}40`,
											border: `1px solid ${plan.accent}55`,
											zIndex: 5,
										}}
									>
										<HiStar size={13} />
										{plan.badge}
									</div>
								)}

								<p
									style={{
										fontSize: '0.75rem',
										color: '#5a5a7a',
										marginBottom: 8,
									}}
								>
									{plan.name}
								</p>

								<div
									style={{
										display: 'flex',
										alignItems: 'flex-end',
										gap: 4,
										marginBottom: '1.5rem',
									}}
								>
									<span
										style={{
											fontFamily: 'Unbounded, sans-serif',
											fontWeight: 900,
											color: '#e8e8f8',
											lineHeight: 1,
											fontSize: plan.priceSmall ? '1.9rem' : '2.4rem',
										}}
									>
										{plan.price}
									</span>
									<span
										style={{
											fontSize: '0.9rem',
											color: '#5a5a7a',
											marginBottom: 2,
										}}
									>
										₽
									</span>
								</div>

								<div
									style={{
										height: 1,
										background: '#1c1c2e',
										marginBottom: '1.5rem',
									}}
								/>

								<ul
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: 10,
										marginBottom: '2rem',
										listStyle: 'none',
										padding: 0,
									}}
								>
									{plan.features.map(fk => (
										<li
											key={fk}
											style={{
												display: 'flex',
												gap: 10,
												fontSize: '0.875rem',
												color: '#a0a0c0',
												alignItems: 'flex-start',
											}}
										>
											<span
												style={{
													fontWeight: 700,
													flexShrink: 0,
													color: plan.accent,
												}}
											>
												✓
											</span>
											{t(fk)}
										</li>
									))}
								</ul>

								<button
									onClick={scrollToOrder}
									style={{
										width: '100%',
										height: 44,
										borderRadius: 12,
										fontFamily: 'Manrope, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 700,
										cursor: 'pointer',
										transition: 'all 0.2s',
										...(plan.outline
											? {
													background: 'transparent',
													color: '#e8e8f8',
													border: '1px solid #1c1c2e',
												}
											: {
													background: plan.accent,
													color: '#080810',
													border: 'none',
												}),
									}}
									onMouseEnter={e => {
										if (plan.outline) {
											e.currentTarget.style.borderColor = plan.accent
											e.currentTarget.style.color = plan.accent
										}
									}}
									onMouseLeave={e => {
										if (plan.outline) {
											e.currentTarget.style.borderColor = '#1c1c2e'
											e.currentTarget.style.color = '#e8e8f8'
										}
									}}
								>
									{plan.btn}
								</button>
							</div>
						</AnimateIn>
					))}
				</div>
			</div>
		</section>
	)
}
