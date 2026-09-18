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
    description: 'Full rewires, consumer unit upgrades, new circuits, sockets, lighting, EV chargers, and landlord safety certificates for homeowners across the Midlands and beyond.',
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
  {
    number: '04',
    title: 'Air Con, Solar & Ventilation',
    description: 'Air conditioning, HVAC and MVHR ventilation systems, plus solar panel and battery storage installation to cut running costs and improve comfort.',
    href: '/services#climate-energy',
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
  { number: '02', title: 'Local Roots, National Reach', body: 'Based in Branston, Burton-on-Trent, with honest pricing — and happy to travel for the right job, anywhere in the country.' },
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
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=1920&q=80"
            alt="Electrician testing electrical panel wiring"
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
              <span className="hero-line-1 block text-5xl sm:text-6xl lg:text-[5.25rem] font-black text-white leading-none tracking-tight">From sockets</span>
              <span className="hero-line-2 block text-5xl sm:text-6xl lg:text-[5.25rem] font-black text-white leading-none tracking-tight">to solar,</span>
              <span className="hero-line-3 block text-5xl sm:text-6xl lg:text-[5.25rem] font-black text-red-500 leading-none tracking-tight">
                fully covered.
              </span>
            </h1>
            <p className="hero-sub text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Domestic, commercial, fire &amp; security, air conditioning and solar — fully qualified engineers based in Burton-on-Trent, working across the Midlands and nationwide.
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

          {/* Single row — sized so most projects fit on screen, last one peeks and needs a scroll to reveal fully */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {projects.map((p, i) => (
              <FadeIn
                key={p.name}
                delay={i * 70}
                className="flex-shrink-0 w-[72%] sm:w-[42%] md:w-[30%] lg:w-[18%] snap-start"
              >
                <div className="group relative rounded-xl overflow-hidden bg-[#1a1a1a]" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={p.image} alt={p.alt} fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 19vw"
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
              <FadeIn key={title} delay={i * 80} variant="pop" className="bg-[#111111] p-6 sm:p-8">
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

    </>
  )
}
