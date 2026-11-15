'use client'

import { Fragment } from 'react'
import Scene from './Scene'

export type Segment =
  | { text: string; accent?: boolean }
  | { br: true }

interface Props {
  segments: Segment[]
  className?: string
}

/**
 * Section heading whose words light up one by one as it scrolls into view.
 * Words are fully lit before JS runs, so the text never depends on scripting.
 */
export default function ScrubHeading({ segments, className = '' }: Props) {
  const total = segments.reduce(
    (n, s) => n + ('text' in s ? s.text.split(' ').length : 0),
    0
  )
  let i = 0

  return (
    <Scene mode="enter" start={0.92} end={0.45} initial={1}>
      <h2 className={`scrub ${className}`} style={{ '--n': total } as React.CSSProperties}>
        {segments.map((seg, s) => {
          if ('br' in seg) return <br key={s} className="hidden sm:block" />
          return (
            <Fragment key={s}>
              {seg.text.split(' ').map((word) => {
                const idx = i++
                return (
                  <Fragment key={idx}>
                    <span
                      className={seg.accent ? 'italic text-red-500' : undefined}
                      style={{
                        '--i': idx,
                        ...(seg.accent ? { fontFamily: 'var(--font-playfair)' } : {}),
                      } as React.CSSProperties}
                    >
                      {word}
                    </span>{' '}
                  </Fragment>
                )
              })}
            </Fragment>
          )
        })}
      </h2>
    </Scene>
  )
}
