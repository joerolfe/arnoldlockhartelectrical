import FadeIn from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import PageEffects from '@/components/home/PageEffects'

const accreditations = [
  { name: 'NICEIC Approved', desc: "UK's leading electrical safety body" },
  { name: 'Part P Registered', desc: 'Self-certify domestic electrical work' },
  { name: 'Fully Insured', desc: 'Public liability & professional indemnity' },
]

const eyebrow = 'eyebrow text-red-500 text-xs font-semibold tracking-[0.2em] uppercase'
const label = 'text-[11px] font-semibold text-white/40 tracking-[0.2em] uppercase'
const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties

export default function ContactPage() {
  return (
    <>
      <PageEffects />

      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section data-glow className="relative bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0 hero-glow" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 sm:pb-24">
          <p className={`hero-in ${eyebrow} mb-5 sm:mb-7`} style={delay(0)}>Free No-Obligation Quotes</p>
          <h1 className="page-hero-title font-black text-white leading-[0.98] tracking-tight mb-7 sm:mb-10">
            <span className="hero-mask"><span className="whitespace-nowrap" style={delay(120)}>Let&apos;s get</span></span>
            <span className="hero-mask hero-mask-italic">
              <span className="whitespace-nowrap italic text-red-500" style={{ ...delay(220), fontFamily: 'var(--font-playfair)' }}>started.</span>
            </span>
          </h1>
          <p className="hero-in text-gray-200 text-lg sm:text-2xl leading-relaxed max-w-xl" style={delay(500)}>
            Fill in the form and we&apos;ll get back to you within 24 hours. Or give us a call — we&apos;re always happy to chat.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Form */}
            <FadeIn variant="lux" className="lg:col-span-7 lg:self-start">
              <div data-glow className="glow-card !h-auto !bg-[#141414] border border-white/8 rounded-3xl p-6 sm:p-10 overflow-hidden">
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">Request a Quote</h2>
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            {/* Sidebar — pins beside the form on desktop */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-12">

              {/* Contact details */}
              <FadeIn variant="lux" delay={120}>
                <h3 className={`${label} mb-6`}>Contact Directly</h3>
                <div>
                  {[
                    { label: 'Phone', value: '07878 009694', href: 'tel:07878009694', big: true },
                    { label: 'Email', value: 'contact@alhelectrical.co.uk', href: 'mailto:contact@alhelectrical.co.uk', big: false },
                    { label: 'Location', value: 'Branston, Burton-on-Trent, Staffordshire', href: null, big: false },
                  ].map(({ label: name, value, href, big }) => (
                    <div key={name} className="py-5 border-t border-white/8">
                      <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-1.5">{name}</p>
                      {href ? (
                        <a
                          href={href}
                          className={`foot-link text-white break-all ${big ? 'text-3xl sm:text-4xl font-black tracking-tight' : 'text-base sm:text-lg font-medium'}`}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-base sm:text-lg font-medium">{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Accreditations */}
              <FadeIn variant="lux" delay={200}>
                <h3 className={`${label} mb-6`}>Accreditations</h3>
                <div>
                  {accreditations.map(({ name, desc }) => (
                    <div key={name} className="flex items-center gap-4 py-4 border-t border-white/8">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-white text-sm font-semibold">{name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Response time */}
              <FadeIn variant="lux" delay={280}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-white text-sm font-bold tracking-wide">Fast Response</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We aim to respond to all enquiries within 24 hours. For urgent matters, call us directly.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom links ──────────────────────────────────────────────────── */}
      <section className="bg-[#0b0b0b] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12">
          {[
            { label: 'View our services', href: '/services' },
            { label: 'See our projects', href: '/projects' },
          ].map(({ label: text, href }, i) => (
            <FadeIn key={href} variant="lux" delay={i * 120}>
              <Link
                href={href}
                className="wire-link group flex items-center justify-between gap-6 py-7 sm:py-10 border-t border-white/10 text-white/70 hover:text-white transition-colors duration-500"
              >
                <span className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight">{text}</span>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-white/30 group-hover:text-red-500 group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
