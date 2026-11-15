import Image from 'next/image'
import Link from 'next/link'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import TeamSection from '@/components/TeamSection'
import FadeIn from '@/components/FadeIn'
import Scene from '@/components/home/Scene'
import ScrubHeading from '@/components/home/ScrubHeading'
import CountUp from '@/components/home/CountUp'
import ServicesList from '@/components/home/ServicesList'
import ProjectsRail from '@/components/home/ProjectsRail'
import PageEffects from '@/components/home/PageEffects'

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
  { name: 'Aston Martin', type: 'Commercial Fit-Out' },
  { name: 'Trent Bridge', type: 'Stadium & Events' },
  { name: 'Timpsons HQ', type: 'Corporate HQ' },
  { name: 'St Peters Gate', type: 'Retail & Hospitality' },
  { name: 'Deciem, Edinburgh', type: 'Retail Installation' },
  { name: 'Barn Conversions', type: 'Domestic Projects' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

const h2 = 'text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight'
const eyebrow = 'eyebrow text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6'
const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties

export default function Home() {
  return (
    <>
      <PageEffects />

      {/* ── Hero — pinned while the rest of the page slides up over it ────── */}
      <Scene mode="pin" className="relative h-[200svh]">
        <section data-glow className="sticky top-0 h-[100svh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 hero-settle">
            <div className="absolute inset-0 hero-media">
              <Image
                src="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=1920&q=80"
                alt="Electrician testing electrical panel wiring"
                fill priority sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 hero-glow" />
            <div className="absolute inset-0 bg-black hero-dim" />
          </div>

          <div className="hero-content relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10 flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <div className="hero-in inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8" style={delay(0)}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                <span className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase">NICEIC Approved · Electrical Specialists</span>
              </div>
              <h1 className="hero-title mb-6 sm:mb-7 font-black leading-none tracking-tight">
                <span className="hero-mask"><span className="text-white" style={delay(120)}>From sockets</span></span>
                <span className="hero-mask"><span className="text-white" style={delay(240)}>to solar,</span></span>
                <span className="hero-neon-wrap" style={delay(360)}>
                  <span className="hero-mask"><span className="hero-neon text-red-500">fully covered.</span></span>
                </span>
              </h1>
              <p className="hero-in text-gray-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto" style={delay(650)}>
                Domestic, commercial, fire &amp; security, air conditioning and solar — fully qualified engineers based in Burton-on-Trent, working across the Midlands and nationwide.
              </p>
              <div className="hero-in flex flex-col sm:flex-row gap-3 justify-center" style={delay(800)}>
                <a href="tel:07878009694" className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm text-white font-semibold text-sm transition-all duration-300">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 07878 009694
                </a>
                <Link href="/services" className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/10 bg-[#1c1c1c]/70 hover:bg-[#1c1c1c] hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm text-white font-semibold text-sm transition-all duration-300">
                  View Services
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 [@media(max-height:820px)]:hidden">
            <div className="hero-in flex flex-col items-center gap-2 text-white/40" style={delay(1200)}>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>
      </Scene>

      {/* ── Everything below rides up over the hero as one sheet ─────────── */}
      <div className="sheet">

        {/* ── Stats ───────────────────────────────────────────────────────── */}
        <section className="border-b border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map(({ value, label }, i) => (
                <FadeIn
                  key={label}
                  variant="lux"
                  delay={i * 100}
                  className={[
                    'py-10 sm:py-16 lg:py-20 px-4 sm:px-8 flex flex-col items-center text-center',
                    // right border: left col on mobile (i=0,2), first 3 on desktop
                    (i === 0 || i === 2) ? 'border-r border-white/8' : '',
                    // bottom border: top row on mobile only
                    i < 2 ? 'border-b border-white/8 lg:border-b-0' : '',
                    // override for desktop: all but last get right border
                    i === 1 ? 'lg:border-r lg:border-white/8' : '',
                    i === 2 ? 'lg:border-r lg:border-white/8 border-r-0' : '',
                  ].join(' ')}
                >
                  <span className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-2 sm:mb-3">
                    <CountUp value={value} />
                  </span>
                  <span className="text-gray-500 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">{label}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 lg:py-40 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12 sm:mb-20">
              <FadeIn variant="lux">
                <p className={eyebrow}>What We Do</p>
              </FadeIn>
              <ScrubHeading
                className={h2}
                segments={[{ text: 'Everything electrical,' }, { br: true }, { text: 'under one roof.' }]}
              />
            </div>

            <ServicesList services={services} />

            <FadeIn variant="lux" className="mt-8 sm:mt-12">
              <Link href="/services" className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
                View all services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── Projects — pins and scrolls sideways on desktop ─────────────── */}
        <ProjectsRail projects={projects}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <FadeIn variant="lux">
                <p className={eyebrow}>Our Work</p>
              </FadeIn>
              <ScrubHeading
                className={h2}
                segments={[{ text: 'Projects that speak' }, { br: true }, { text: 'for themselves.' }]}
              />
            </div>
            <Link href="/projects" className="group text-sm text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 flex-shrink-0">
              View all
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ProjectsRail>

        {/* ── Why choose us ───────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 lg:py-40 bg-[#111111] border-t border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12 sm:mb-20">
              <FadeIn variant="lux">
                <p className={eyebrow}>Why Us</p>
              </FadeIn>
              <ScrubHeading
                className={`${h2} max-w-4xl`}
                segments={[{ text: 'The standard you deserve,' }, { text: 'every time.', accent: true }]}
              />
            </div>

            <div data-glow className="glow-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px p-px">
              {whyPoints.map(({ number, title, body }, i) => (
                <div key={title} data-glow className="glow-card group">
                  <FadeIn delay={i * 110} variant="lux" className="relative p-6 sm:p-8 lg:p-10">
                    <p className="text-red-500/50 group-hover:text-red-500 transition-colors duration-500 text-xs font-bold tracking-widest mb-6 sm:mb-10">{number}</p>
                    <h4 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-2 sm:mb-3">{title}</h4>
                    <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-500 text-sm leading-relaxed">{body}</p>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ────────────────────────────────────────────────────────── */}
        <TeamSection />

        {/* ── Reviews ─────────────────────────────────────────────────────── */}
        <ReviewsCarousel />

      </div>
    </>
  )
}
