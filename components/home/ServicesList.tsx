'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { onFrame, clamp01, prefersReducedMotion } from '@/lib/scroll'

interface Service {
  number: string
  title: string
  description: string
  href: string
}

/**
 * Services as a "live wire": a current runs down the left edge as you scroll,
 * switching each service on as it passes.
 */
export default function ServicesList({ services }: { services: Service[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const rows = Array.from(el.querySelectorAll<HTMLElement>('.svc-row'))
    el.classList.add('svc-live')

    const off = onFrame(() => {
      const r = el.getBoundingClientRect()
      const head = window.innerHeight * 0.62 // where the current's leading edge sits
      el.style.setProperty('--p', clamp01((head - r.top) / r.height).toFixed(4))
      for (const row of rows) {
        const centre = r.top + row.offsetTop + row.offsetHeight / 2
        row.classList.toggle('is-on', centre < head)
      }
    })

    return () => {
      off()
      el.classList.remove('svc-live')
    }
  }, [])

  return (
    <div ref={ref} className="svc relative border-t border-white/8" style={{ '--p': 1 } as React.CSSProperties}>
      <div className="svc-wire" aria-hidden>
        <div className="svc-wire-fill" />
        <div className="svc-spark" />
      </div>

      {services.map(({ number, title, description, href }) => (
        <Link
          key={title}
          href={href}
          className="svc-row group relative block pl-7 sm:pl-12 lg:pl-16 py-7 sm:py-10 lg:py-12 border-b border-white/8"
        >
          <span className="svc-node" aria-hidden />
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-12">
            <div className="flex items-baseline gap-4 lg:gap-8 lg:w-[52%] flex-shrink-0">
              <span className="svc-num text-xs font-bold tracking-widest flex-shrink-0">{number}</span>
              <h3 className="svc-title text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                {title}
              </h3>
            </div>
            <p className="svc-desc text-gray-400 text-sm sm:text-base leading-relaxed lg:flex-1 pl-9 lg:pl-0">
              {description}
            </p>
            <span className="svc-more hidden lg:flex items-center gap-2 flex-shrink-0 text-sm font-medium">
              Learn more
              <svg className="w-4 h-4 -translate-x-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
