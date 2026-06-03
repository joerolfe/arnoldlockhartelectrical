'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function FadeIn({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = Tag as any
  return (
    <T
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </T>
  )
}
