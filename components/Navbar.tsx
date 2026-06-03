'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Floating pill ───────────────────────────────────────── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-5xl transition-all duration-300 rounded-full ${
            scrolled
              ? 'bg-[#111111]/93 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50'
              : 'bg-[#111111]/75 backdrop-blur-sm border border-white/8'
          }`}
        >
          <div className="flex items-center justify-between px-3 py-2 lg:px-5">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/FIRESECURITYLOGO.avif"
                alt="Arnold Lockhart Electrical Fire & Security"
                width={200}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === href ? 'text-red-500' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-full transition-colors"
              >
                Get a Free Quote
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-1.5 text-gray-300 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Full-screen mobile overlay ──────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0f0f0f] transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/FIRESECURITYLOGO.avif"
              alt="Arnold Lockhart Electrical Fire & Security"
              width={160}
              height={44}
              className="h-12 w-auto"
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links — large, vertically centred */}
        <div className="flex-1 flex flex-col justify-center px-8 gap-2">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-5xl font-bold tracking-tight transition-all duration-200 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${pathname === href ? 'text-red-500' : 'text-white hover:text-red-500'}`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA pinned to bottom */}
        <div className="px-6 pb-10">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-base rounded-full transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
