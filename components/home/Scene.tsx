'use client'

import { useEffect, useRef } from 'react'
import { onFrame, clamp01 } from '@/lib/scroll'

interface Props {
  children: React.ReactNode
  className?: string
  /**
   * pin   — progress through a tall track with a sticky child (0 when the track
   *         top hits the viewport top, 1 when its bottom hits the viewport bottom)
   * enter — progress as the element's top travels from `start` to `end`
   *         (fractions of the viewport height)
   */
  mode?: 'pin' | 'enter'
  start?: number
  end?: number
  /** Value of --p before JS runs */
  initial?: number
}

/** Writes scroll progress (0–1) to the --p custom property; CSS does the rest. */
export default function Scene({
  children,
  className = '',
  mode = 'pin',
  start = 0.9,
  end = 0.4,
  initial = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let last = -1

    return onFrame(() => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let p: number
      if (mode === 'pin') {
        const total = r.height - vh
        p = total > 0 ? -r.top / total : 0
      } else {
        p = (vh * start - r.top) / (vh * (start - end))
      }
      p = clamp01(p)
      if (p !== last) {
        last = p
        el.style.setProperty('--p', p.toFixed(4))
      }
    })
  }, [mode, start, end])

  return (
    <div ref={ref} className={className} style={{ '--p': initial } as React.CSSProperties}>
      {children}
    </div>
  )
}
