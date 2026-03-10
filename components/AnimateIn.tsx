'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateInProps {
	children: React.ReactNode
	delay?: number
	className?: string
}

export default function AnimateIn({
	children,
	delay = 0,
	className = '',
}: AnimateInProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true)
					observer.unobserve(el)
				}
			},
			{ threshold: 0.12 },
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			className={className}
			style={{
				height: '100%',
				opacity: visible ? undefined : 0,
				animation: visible
					? `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards`
					: 'none',
			}}
		>
			{children}
		</div>
	)
}
