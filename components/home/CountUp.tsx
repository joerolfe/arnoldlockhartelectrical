'use client'

import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/lib/scroll'

/** Counts the leading number of a value like "500+" up from zero when it scrolls into view. */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0

  useEffect(() => {
    const el = ref.current
    if (!el || !target || prefersReducedMotion()) return

    let raf = 0
    el.textContent = '0'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1800
        const t0 = performance.now()
        const step = (now: number) => {
          const t = Math.min(1, (now - t0) / duration)
          const eased = 1 - Math.pow(2, -10 * t) // ease-out expo
          el.textContent = String(Math.round(target * (t === 1 ? 1 : eased)))
          if (t < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = String(target)
    }
  }, [target])

  if (!match) return <>{value}</>

  return (
    <span className="tabular-nums">
      <span ref={ref}>{match[1]}</span>
      {match[2]}
    </span>
  )
}
