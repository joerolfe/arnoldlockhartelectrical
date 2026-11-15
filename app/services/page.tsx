import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import Scene from '@/components/home/Scene'
import ScrubHeading from '@/components/home/ScrubHeading'
import PageEffects from '@/components/home/PageEffects'

const services = [
  {
    number: '01',
    id: 'domestic',
    title: 'Domestic Electrical',
    tagline: 'Your home, wired right.',
    description: 'From a single socket to a full rewire, we handle every aspect of domestic electrical work. Safe, certified, and carried out by fully qualified engineers who treat your home with respect.',
    items: [
      'Full property rewires',
      'Consumer unit upgrades',
      'New sockets & circuits',
      'Lighting design & installation',
      'EV home charger installation',
      'Electrical Condition Reports (EICRs)',
      'Landlord safety certificates',
      'Smoke & carbon monoxide alarms',
      'Outdoor & garden lighting',
      'Bathroom & kitchen electrics',
    ],
  },
  {
    number: '02',
    id: 'commercial',
    title: 'Commercial Electrical',
    tagline: 'Built for business.',
    description: "We've delivered commercial electrical projects for some of the UK's most recognised names — Aston Martin, Trent Bridge, Timpsons. Whatever the scale, our commercial team works efficiently to meet deadlines without compromising on safety or quality.",
    items: [
      'Office & retail fit-outs',
      'Industrial & factory wiring',
      'Three-phase power installation',
      'Emergency lighting systems',
      'Distribution board upgrades',
      'Electrical testing & inspection',
      'Planned maintenance contracts',
      'Energy management & LED retrofits',
      'Data cabling & containment',
      'External & security lighting',
    ],
  },
  {
    number: '03',
    id: 'fire-security',
    title: 'Fire & Security',
    tagline: 'Protection you can rely on.',
    description: 'We design, install, and maintain fire alarm and security systems to BS standards. Backed by ongoing service contracts, you\'re never left without protection — whether it\'s a single smoke detector or a full addressable fire alarm system across multiple buildings.',
    items: [
      'Fire alarm design & installation (BS 5839)',
      'Addressable & conventional systems',
      'Fire alarm servicing & maintenance',
      'Emergency lighting (BS 5266)',
      'CCTV design & installation',
      'IP & analogue camera systems',
      'Access control & door entry',
      'Intruder alarm installation',
      'Remote monitoring solutions',
      'Annual service contracts',
    ],
  },
  {
    number: '04',
    id: 'climate-energy',
    title: 'Air Con, Solar & Ventilation',
    tagline: 'Comfort and efficiency, built in.',
    description: 'From air conditioning and ventilation to solar panels and battery storage, we design and install complete climate and renewable energy systems — helping homes and businesses cut running costs and stay comfortable all year round.',
    items: [
      'Air conditioning installation & servicing',
      'Split & multi-split AC systems',
      'HVAC design & installation',
      'Mechanical ventilation (MVHR) systems',
      'Whole-house ventilation retrofits',
      'Solar panel (PV) installation',
      'Battery storage systems',
      'Solar & battery integration',
      'EV charger & solar integration',
      'Energy efficiency assessments',
    ],
  },
]

const eyebrow = 'eyebrow text-red-500 text-xs font-semibold tracking-[0.2em] uppercase'
const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties

const Arrow = ({ className = '' }: { className?: string }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const QuoteButton = ({ className = '' }: { className?: string }) => (
  <Link
    href="/contact"
    className={`nav-cta group inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold rounded-full text-sm ${className}`}
  >
    Get a Quote
    <Arrow className="group-hover:translate-x-1 transition-transform duration-300" />
  </Link>
)

export default function ServicesPage() {
  return (
    <>
      <PageEffects />

      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section data-glow className="relative min-h-[100svh] flex flex-col bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0 hero-glow" aria-hidden />

        <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-10 sm:pb-14">
          <div>
            <p className={`hero-in ${eyebrow} mb-5 sm:mb-7`} style={delay(0)}>What We Offer</p>
            <h1 className="page-hero-title font-black text-white leading-[0.98] tracking-tight mb-7 sm:mb-10">
              <span className="hero-mask"><span className="whitespace-nowrap" style={delay(120)}>Everything</span></span>
              <span className="hero-mask"><span className="whitespace-nowrap" style={delay(220)}>electrical,</span></span>
              <span className="hero-mask hero-mask-italic">
                <span className="whitespace-nowrap italic text-red-500" style={{ ...delay(320), fontFamily: 'var(--font-playfair)' }}>under one roof.</span>
              </span>
            </h1>
            <p className="hero-in text-gray-200 text-lg sm:text-2xl leading-relaxed max-w-2xl" style={delay(600)}>
              Domestic installations, commercial fit-outs, fire &amp; security systems, air conditioning and solar — all delivered by the same qualified, trusted team.
            </p>
          </div>
        </div>

        {/* Service anchor links */}
        <div className="hero-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={delay(700)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="wire-link group flex items-center gap-4 py-4 sm:py-6 border-t border-white/10 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-red-500/70 text-xs font-bold tracking-widest">{s.number}</span>
                <span className="text-sm font-semibold tracking-wide flex-1">{s.title}</span>
                <Arrow className="rotate-90 text-white/25 group-hover:text-red-500 group-hover:translate-y-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service sections — text pins while the detail scrolls past ────── */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-0 py-20 sm:py-28 lg:py-40 bg-[#111111] border-t border-white/8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Content */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
                <FadeIn variant="lux">
                  <p className={`${eyebrow} mb-5 sm:mb-6`}>{service.number}</p>
                </FadeIn>
                <ScrubHeading
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.02] tracking-tight mb-5"
                  segments={[{ text: service.title }]}
                />
                <FadeIn variant="lux" delay={80}>
                  <p className="text-gray-300 text-xl sm:text-2xl mb-6 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {service.tagline}
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </p>
                  <QuoteButton className="hidden lg:inline-flex mt-10" />
                </FadeIn>
              </div>

              {/* Detail */}
              <div className="lg:col-span-7">
                {/* Placeholder photo */}
                <Scene mode="enter" start={1} end={0.35} initial={1}>
                  <div className="zoom-frame group relative aspect-[4/3] overflow-hidden">
                    <div className="zoom-inner absolute inset-0">
                      <PhotoPlaceholder />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Number watermark */}
                    <div className="zoom-number absolute -bottom-6 right-4 sm:right-8 text-[9rem] sm:text-[14rem] font-black text-white/[0.05] leading-none tracking-tighter select-none pointer-events-none">
                      {service.number}
                    </div>
                  </div>
                </Scene>

                {/* Feature list */}
                <FadeIn variant="stagger" className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
                  {service.items.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 py-4 border-t border-white/8"
                      style={{ '--i': i } as React.CSSProperties}
                    >
                      <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </FadeIn>

                <FadeIn variant="lux" className="mt-10 lg:hidden">
                  <QuoteButton />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section data-glow className="relative py-24 sm:py-32 lg:py-44 bg-[#0b0b0b] border-t border-white/8 overflow-hidden">
        <div className="absolute inset-0 hero-glow" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <ScrubHeading
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6 sm:mb-8"
            segments={[{ text: 'Not sure what you need?' }]}
          />
          <FadeIn variant="lux" className="flex flex-col items-center">
            <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-md">Give us a call or send a message — we&apos;ll point you in the right direction.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="nav-cta inline-flex items-center justify-center px-7 py-4 text-white font-bold rounded-full text-sm">
                Contact Us
              </Link>
              <a href="tel:07878009694" className="inline-flex items-center justify-center px-7 py-4 border border-white/15 hover:border-white/30 hover:bg-white/5 text-gray-200 hover:text-white font-medium rounded-full transition-all duration-300 text-sm">
                07878 009694
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
