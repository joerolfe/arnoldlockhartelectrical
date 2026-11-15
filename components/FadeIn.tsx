'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  variant?: 'up' | 'pop' | 'lux' | 'stagger'
}

export default function FadeIn({ children, delay = 0, className = '', as: Tag = 'div', variant = 'up' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const shown = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          shown.current = true
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // React rewrites the class attribute when className changes — keep the revealed state
  useEffect(() => {
    if (shown.current) ref.current?.classList.add('is-visible')
  }, [className, variant])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = Tag as any
  const revealClass = { up: 'reveal', pop: 'reveal-pop', lux: 'reveal-lux', stagger: 'reveal-stagger' }[variant]
  return (
    <T
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </T>
  )
}
