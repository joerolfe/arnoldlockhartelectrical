'use client'

import { useEffect, useRef } from 'react'
import { onFrame, clamp01 } from '@/lib/scroll'

/**
 * Page-level effects for the home page:
 *  - a thin "current" line across the top showing scroll progress
 *  - cursor-following glow: any [data-glow] element gets --mx / --my in px
 */
export default function PageEffects() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    return onFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${(max > 0 ? clamp01(window.scrollY / max) : 0).toFixed(4)})`
    })
  }, [])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    let raf = 0
    let x = 0
    let y = 0

    const apply = () => {
      raf = 0
      document.querySelectorAll<HTMLElement>('[data-glow]').forEach((el) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${(x - r.left).toFixed(0)}px`)
        el.style.setProperty('--my', `${(y - r.top).toFixed(0)}px`)
      })
    }
    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(apply)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={barRef} className="page-current" style={{ transform: 'scaleX(0)' }} aria-hidden />
}
