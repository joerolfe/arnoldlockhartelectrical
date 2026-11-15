'use client'

import { useEffect, useRef, useState } from 'react'
import FadeIn from '@/components/FadeIn'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import { onFrame, clamp01 } from '@/lib/scroll'

interface Project {
  name: string
  type: string
}

const PIN_QUERY = '(min-width: 1024px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)'

/**
 * Projects gallery. On desktop the section pins and vertical scroll drives the
 * cards sideways; on touch / small screens it is a native swipe carousel.
 */
export default function ProjectsRail({
  projects,
  children,
}: {
  projects: Project[]
  children: React.ReactNode
}) {
  const trackRef = useRef<HTMLElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const distRef = useRef(0)
  const [pinned, setPinned] = useState(false)
  const [dist, setDist] = useState(0)

  // Decide whether to pin
  useEffect(() => {
    const mq = window.matchMedia(PIN_QUERY)
    const update = () => setPinned(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Measure how far the rail has to travel
  useEffect(() => {
    const rail = railRef.current
    if (!rail || !pinned) return
    const measure = () => {
      const first = rail.firstElementChild as HTMLElement | null
      const last = rail.lastElementChild as HTMLElement | null
      if (!first || !last) return
      const d = Math.max(0, last.offsetLeft + last.offsetWidth + first.offsetLeft - rail.clientWidth)
      distRef.current = d
      setDist(d)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(rail)
    return () => ro.disconnect()
  }, [pinned])

  // Drive the rail from scroll
  useEffect(() => {
    const track = trackRef.current
    const rail = railRef.current
    if (!track || !rail || !pinned) return

    const off = onFrame(() => {
      const r = track.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const p = total > 0 ? clamp01(-r.top / total) : 0
      rail.style.transform = `translate3d(${(-p * distRef.current).toFixed(1)}px,0,0)`
      barRef.current?.style.setProperty('transform', `scaleX(${p.toFixed(4)})`)
    })

    return () => {
      off()
      rail.style.transform = ''
    }
  }, [pinned])

  const gutter = 'px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]'

  return (
    <section
      ref={trackRef}
      className="relative bg-[#0d0d0d]"
      style={pinned ? { height: `calc(100vh + ${dist}px)` } : undefined}
    >
      <div
        className={
          pinned
            ? 'sticky top-0 h-screen flex flex-col justify-center overflow-clip pt-20'
            : 'py-20 sm:py-28'
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 sm:mb-12">
          {children}
        </div>

        <div
          ref={railRef}
          className={`relative flex gap-3 sm:gap-5 ${gutter} ${
            pinned
              ? 'will-change-transform'
              : 'overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide scroll-px-4 sm:scroll-px-6'
          }`}
        >
          {projects.map((p, i) => (
            <FadeIn
              key={p.name}
              variant="lux"
              delay={pinned ? 0 : i * 70}
              className={
                pinned
                  ? 'flex-shrink-0 h-[min(50vh,calc(100vh-26rem))] aspect-[4/3]'
                  : 'flex-shrink-0 w-[78%] sm:w-[46%] md:w-[36%] aspect-[4/3] snap-start'
              }
            >
              <div className="proj-card group relative h-full rounded-2xl overflow-hidden bg-[#1a1a1a]">
                <div className="proj-media absolute inset-0">
                  <PhotoPlaceholder />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <p className="text-red-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-1">{p.type}</p>
                  <p className="text-white text-lg sm:text-xl lg:text-3xl font-black tracking-tight">{p.name}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {pinned && (
          <div className="max-w-7xl mx-auto px-8 w-full mt-10" aria-hidden>
            <div className="h-px bg-white/10">
              <div ref={barRef} className="proj-bar h-px origin-left" style={{ transform: 'scaleX(0)' }} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
