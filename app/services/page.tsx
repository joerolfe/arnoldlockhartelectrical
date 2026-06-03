import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

const services = [
  {
    number: '01',
    id: 'domestic',
    title: 'Domestic Electrical',
    tagline: 'Your home, wired right.',
    description: 'From a single socket to a full rewire, we handle every aspect of domestic electrical work. Safe, certified, and carried out by fully qualified engineers who treat your home with respect.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    imageAlt: 'Domestic electrical installation',
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
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    imageAlt: 'Commercial electrical installation',
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
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80',
    imageAlt: 'Fire alarm and security installation',
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
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-6">
              Everything electrical,{' '}
              <span className="italic text-red-500" style={{ fontFamily: 'var(--font-playfair)' }}>under one roof.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Domestic installations, commercial fit-outs, fire alarms and security systems — all delivered by the same qualified, trusted team.
            </p>
          </FadeIn>

          {/* Service anchor links */}
          <FadeIn delay={150} className="mt-10 flex flex-wrap gap-3">
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/8 hover:border-red-500/30 rounded-full text-gray-400 hover:text-red-500 text-xs font-semibold tracking-wide transition-all"
              >
                <span className="text-red-500/50">{s.number}</span>
                {s.title}
              </a>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Service sections ──────────────────────────────────────────────── */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 sm:py-24 lg:py-28 border-t border-white/8 ${index % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0d0d0d]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <FadeIn>
                  <p className="text-red-500/60 text-xs font-bold tracking-[0.2em] uppercase mb-4">{service.number}</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-base mb-5 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {service.tagline}
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                </FadeIn>

                {/* Feature list */}
                <FadeIn delay={100}>
                  <div className="border-t border-white/8">
                    {service.items.map((item, i) => (
                      <div key={item} className="flex items-center gap-3 py-3 border-b border-white/5">
                        <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={200} className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-colors text-sm"
                  >
                    Get a Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </FadeIn>
              </div>

              {/* Image */}
              <FadeIn delay={150} className={`relative ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Number watermark */}
                <div className="absolute -bottom-4 -right-4 text-[8rem] font-black text-white/3 leading-none select-none pointer-events-none">
                  {service.number}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Not sure what you need?</h2>
              <p className="text-gray-400 text-sm">Give us a call or send a message — we&apos;ll point you in the right direction.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-colors text-sm">
                Contact Us
              </Link>
              <a href="tel:07878009694" className="inline-flex items-center justify-center px-6 py-3.5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium rounded-full transition-colors text-sm">
                07878 009694
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
