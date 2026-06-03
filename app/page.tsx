import Image from 'next/image'
import Link from 'next/link'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import TeamSection from '@/components/TeamSection'
import FadeIn from '@/components/FadeIn'

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    number: '01',
    title: 'Domestic Electrical',
    description: 'Full rewires, consumer unit upgrades, new circuits, sockets, lighting, EV chargers, and landlord safety certificates for homeowners across the Midlands.',
    href: '/services#domestic',
  },
  {
    number: '02',
    title: 'Commercial Electrical',
    description: 'Office fit-outs, retail installations, industrial wiring, three-phase power, emergency lighting, and planned maintenance for businesses of all sizes.',
    href: '/services#commercial',
  },
  {
    number: '03',
    title: 'Fire & Security',
    description: 'BS 5839 compliant fire alarm systems, CCTV, access control, intruder alarms, and regular servicing to keep your people and premises protected.',
    href: '/services#fire-security',
  },
]

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '500+', label: 'Projects Completed' },
  { value: '5★', label: 'Google Rating' },
  { value: '100%', label: 'Fully Qualified' },
]

const whyPoints = [
  { number: '01', title: 'NICEIC Approved', body: 'Every engineer fully qualified and registered — work certified to the highest industry standard.' },
  { number: '02', title: 'Local & Trusted', body: 'Based in Branston, serving Burton-on-Trent and the wider Midlands with honest pricing.' },
  { number: '03', title: 'Major Brands', body: "From home rewires to Aston Martin and Trent Bridge — the same standard on every job." },
  { number: '04', title: 'No Surprises', body: "Upfront quotes, clear communication, and we only leave when you're fully satisfied." },
]

const projects = [
  { name: 'Aston Martin', type: 'Commercial Fit-Out', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', alt: 'Luxury commercial electrical installation' },
  { name: 'Trent Bridge', type: 'Stadium & Events', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80', alt: 'Sports venue electrical installation' },
  { name: 'Timpsons HQ', type: 'Corporate HQ', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Modern office electrical fit-out' },
  { name: 'St Peters Gate', type: 'Retail & Hospitality', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Restaurant and bar installation' },
  { name: 'Deciem, Edinburgh', type: 'Retail Installation', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', alt: 'Premium retail electrical installation' },
  { name: 'Barn Conversions', type: 'Domestic Projects', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', alt: 'Barn conversion electrical installation' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Hero (unchanged) ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
            alt="Professional electrician at work"
            fill priority sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase">NICEIC Approved · Electrical Specialists</span>
            </div>
            <h1 className="mb-7 space-y-1">
              <span className="hero-line-1 block text-5xl sm:text-6xl lg:text-[5.25rem] font-black text-white leading-none tracking-tight">Electrical done</span>
              <span className="hero-line-2 block text-5xl sm:text-6xl lg:text-[5.25rem] font-black text-white leading-none tracking-tight">right,</span>
              <span className="hero-line-3 block text-5xl sm:text-6xl lg:text-[5.25rem] italic text-red-500 leading-none tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                every single time.
              </span>
            </h1>
            <p className="hero-sub text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Domestic, commercial & fire security installations across Burton-on-Trent and the Midlands — fully qualified, no call-out charge, ever.
            </p>
            <div className="hero-ctas flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:07878009694" className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-sm transition-all">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 07878 009694
              </a>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 bg-[#1c1c1c]/70 hover:bg-[#1c1c1c] backdrop-blur-sm text-white font-semibold text-sm transition-all">
                View Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <FadeIn
                key={label}
                delay={i * 80}
                className={[
                  'py-8 sm:py-12 px-4 sm:px-8 flex flex-col items-center text-center',
                  // right border: left col on mobile (i=0,2), first 3 on desktop
                  (i === 0 || i === 2) ? 'border-r border-white/8' : '',
                  // bottom border: top row on mobile only
                  i < 2 ? 'border-b border-white/8 lg:border-b-0' : '',
                  // override for desktop: all but last get right border
                  i === 1 ? 'lg:border-r lg:border-white/8' : '',
                  i === 2 ? 'lg:border-r lg:border-white/8 border-r-0' : '',
                ].join(' ')}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1.5">{value}</span>
                <span className="text-gray-500 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">{label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="mb-10 sm:mb-16">
            <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
              Everything electrical,<br className="hidden sm:block" /> under one roof.
            </h2>
          </FadeIn>

          <div className="border-t border-white/8">
            {services.map(({ number, title, description, href }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <Link
                  href={href}
                  className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 py-6 sm:py-8 border-b border-white/8 hover:border-red-500/30 transition-colors"
                >
                  <span className="text-red-500/60 text-xs font-bold tracking-widest flex-shrink-0">{number}</span>
                  <div className="flex items-center justify-between sm:contents gap-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-red-400 transition-colors flex-shrink-0 sm:w-56 lg:w-64">{title}</h3>
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-red-500 sm:hidden flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
                  <span className="hidden sm:flex items-center gap-2 text-gray-600 group-hover:text-red-500 transition-colors flex-shrink-0 text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300} className="mt-8 sm:mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
            <div>
              <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">Our Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Projects that speak<br className="hidden sm:block" /> for themselves.
              </h2>
            </div>
            <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 flex-shrink-0">
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>

          {/*
            Mobile: 2-col, first card spans full width
            sm: 2-col, first card spans full width
            lg: 3-col editorial (first spans 2)
          */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {projects.map((p, i) => (
              <FadeIn
                key={p.name}
                delay={i * 70}
                className={[
                  'h-full',
                  i === 0 ? 'col-span-2 lg:col-span-2' : '',
                ].join(' ')}
              >
                <div className="group relative rounded-xl overflow-hidden bg-[#1a1a1a] h-full" style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}>
                  <Image
                    src={p.image} alt={p.alt} fill
                    sizes={i === 0 ? '100vw' : '(max-width: 1024px) 50vw, 33vw'}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                    <p className="text-red-400 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">{p.type}</p>
                    <p className="text-white text-sm sm:text-base font-bold">{p.name}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn className="mb-10 sm:mb-16">
            <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">Why Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
              The standard you deserve,{' '}
              <span className="italic text-red-500" style={{ fontFamily: 'var(--font-playfair)' }}>every time.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {whyPoints.map(({ number, title, body }, i) => (
              <FadeIn key={title} delay={i * 80} className="bg-[#111111] p-6 sm:p-8">
                <p className="text-red-500/50 text-xs font-bold tracking-widest mb-4 sm:mb-6">{number}</p>
                <h4 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────────────── */}
      <TeamSection />

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── Get in Touch ──────────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] border-t border-white/8">

        {/* Status bar */}
        <div className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <p className="text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase">Get in Touch</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-gray-600 text-[10px] font-semibold tracking-wide">Responding within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left — headline + CTAs */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-none tracking-tight mb-6">
                Ready to get<br />
                <span className="italic text-red-500" style={{ fontFamily: 'var(--font-playfair)' }}>started?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                Get a free, no-obligation quote today. Whether it&apos;s a single socket or a full commercial fit-out — we&apos;re ready to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-colors text-sm w-full sm:w-auto"
              >
                Request a Free Quote
              </Link>
            </div>

            {/* Right — contact details */}
            <div className="lg:col-span-2 lg:pl-12 lg:border-l lg:border-white/8 flex flex-col justify-center space-y-6">

              <div>
                <p className="text-gray-600 text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">Phone</p>
                <a href="tel:07878009694" className="text-white text-2xl font-bold hover:text-red-500 transition-colors tracking-tight">
                  07878 009694
                </a>
              </div>

              <div className="h-px bg-white/5" />

              <div>
                <p className="text-gray-600 text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">Email</p>
                <a href="mailto:contact@arnoldlockhartelectrical.com" className="text-white text-sm font-medium hover:text-red-500 transition-colors break-all">
                  contact@arnoldlockhartelectrical.com
                </a>
              </div>

              <div className="h-px bg-white/5" />

              <div>
                <p className="text-gray-600 text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">Location</p>
                <p className="text-white text-sm font-medium">Branston, Burton-on-Trent</p>
                <p className="text-gray-500 text-xs mt-0.5">Staffordshire, DE14</p>
              </div>

              <div className="h-px bg-white/5" />

              {/* Socials */}
              <div className="flex gap-2 pt-1">
                {[
                  { label: 'Facebook', href: 'https://www.facebook.com/arnoldlockhartelectric/', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
                  { label: 'Instagram', href: 'https://www.instagram.com/arnoldlockhart', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/arnold-lockhart-electrical-ltd/', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/8 hover:border-red-500/30 bg-white/3 hover:bg-red-500/10 flex items-center justify-center text-gray-500 hover:text-red-500 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
