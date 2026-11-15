'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const EASE = 'ease-[cubic-bezier(0.16,1,0.3,1)]'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  const linksRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLSpanElement>(null)

  // Glass on scroll; tuck away when scrolling down, return when scrolling up
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 500)
        lastY = y
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Sliding highlight behind the desktop links — follows hover, rests on the active page
  const movePill = useCallback((el: HTMLElement | null) => {
    const pill = pillRef.current
    if (!pill) return
    if (!el) {
      pill.style.opacity = '0'
      return
    }
    pill.style.opacity = '1'
    pill.style.width = `${el.offsetWidth}px`
    pill.style.transform = `translateX(${el.offsetLeft}px)`
  }, [])

  const restPill = useCallback(() => {
    movePill(linksRef.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null)
  }, [movePill])

  useEffect(() => {
    const links = linksRef.current
    if (!links) return
    restPill()
    const ro = new ResizeObserver(restPill)
    ro.observe(links)
    return () => ro.disconnect()
  }, [pathname, restPill])

  return (
    <>
      {/* ── Floating bar ────────────────────────────────────────── */}
      <div
        className={`fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 transition-transform duration-700 ${EASE} ${
          hidden && !open ? '-translate-y-[160%]' : 'translate-y-0'
        }`}
      >
        <nav
          className={`nav-glass w-full rounded-full border transition-all duration-700 ${EASE} ${
            scrolled
              ? 'is-scrolled max-w-4xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.55)]'
              : 'max-w-6xl border-transparent'
          }`}
        >
          <div className={`flex items-center justify-between pl-4 pr-2 lg:pl-5 transition-all duration-700 ${EASE} ${scrolled ? 'py-2' : 'py-2.5'}`}>

            {/* Logo */}
            <Link href="/" id="navbar-logo" className="flex items-center flex-shrink-0">
              <Image
                src="/FIRESECURITYLOGO.avif"
                alt="Arnold Lockhart Electrical Fire & Security"
                width={308}
                height={176}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop links */}
            <div
              ref={linksRef}
              onMouseLeave={restPill}
              className="relative hidden lg:flex items-center"
            >
              <span
                ref={pillRef}
                aria-hidden
                className={`absolute left-0 top-0 h-full rounded-full bg-white/10 opacity-0 transition-[transform,width,opacity] duration-500 ${EASE}`}
              />
              {navLinks.map(({ href, label }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    onMouseEnter={(e) => movePill(e.currentTarget)}
                    onFocus={(e) => movePill(e.currentTarget)}
                    onBlur={restPill}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      active ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </div>

            {/* CTA + menu button */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="nav-cta group hidden sm:inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2.5 text-white text-[13px] font-semibold rounded-full"
              >
                Get a Free Quote
                <svg className={`w-3.5 h-3.5 transition-transform duration-500 ${EASE} group-hover:translate-x-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex flex-col items-center justify-center gap-[5px] transition-colors"
                aria-label="Open menu"
              >
                <span className="block w-4 h-px bg-white" />
                <span className="block w-4 h-px bg-white" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Full-screen mobile overlay ──────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0a0a0a]/90 backdrop-blur-2xl transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Top bar — lines up with the floating bar */}
        <div className="flex items-center justify-between pl-7 pr-5 sm:pl-8 sm:pr-6 pt-[22px] sm:pt-[26px]">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/FIRESECURITYLOGO.avif"
              alt="Arnold Lockhart Electrical Fire & Security"
              width={308}
              height={176}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links — large, vertically centred, each rising out of a mask */}
        <div className="flex-1 flex flex-col justify-center px-7 sm:px-8">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="group block overflow-hidden border-b border-white/8 py-4"
            >
              <span
                className={`flex items-center justify-between text-5xl font-black tracking-tight transition-all duration-700 ${EASE} ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                } ${pathname === href ? 'text-red-500' : 'text-white group-hover:text-red-500'}`}
                style={{ transitionDelay: open ? `${100 + i * 70}ms` : '0ms' }}
              >
                {label}
                <svg className="w-6 h-6 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7m0 0H8m9 0v9" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA pinned to bottom */}
        <div
          className={`px-6 pb-10 transition-all duration-700 ${EASE} ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionDelay: open ? '420ms' : '0ms' }}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="nav-cta flex items-center justify-center w-full py-4 text-white font-bold text-base rounded-full"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
