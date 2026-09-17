'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Phase = 'hold' | 'fly' | 'exit' | 'done'

export default function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>('hold')
  const [style, setStyle] = useState<React.CSSProperties>({})
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const holdTimer = setTimeout(() => {
      const target = document.getElementById('navbar-logo')
      const source = logoRef.current
      if (target && source) {
        const t = target.getBoundingClientRect()
        const s = source.getBoundingClientRect()
        const scale = t.width / s.width
        const dx = t.left + t.width / 2 - (s.left + s.width / 2)
        const dy = t.top + t.height / 2 - (s.top + s.height / 2)
        setStyle({ transform: `translate(${dx}px, ${dy}px) scale(${scale})` })
      }
      setPhase('fly')
    }, 550)

    return () => clearTimeout(holdTimer)
  }, [])

  useEffect(() => {
    if (phase === 'fly') {
      const flyTimer = setTimeout(() => setPhase('exit'), 700)
      return () => clearTimeout(flyTimer)
    }
    if (phase === 'exit') {
      const exitTimer = setTimeout(() => {
        setPhase('done')
        document.body.style.overflow = ''
      }, 350)
      return () => clearTimeout(exitTimer)
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] transition-opacity duration-[350ms] ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden={phase === 'exit'}
    >
      <div
        ref={logoRef}
        className="transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={style}
      >
        <Image
          src="/FIRESECURITYLOGO.avif"
          alt="Arnold Lockhart Electrical Fire & Security"
          width={308}
          height={176}
          priority
          className="w-56 sm:w-64 h-auto"
        />
      </div>
    </div>
  )
}
