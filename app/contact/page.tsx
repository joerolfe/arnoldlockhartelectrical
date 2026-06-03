import FadeIn from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

const accreditations = [
  { name: 'NICEIC Approved', desc: "UK's leading electrical safety body" },
  { name: 'Part P Registered', desc: 'Self-certify domestic electrical work' },
  { name: 'Fully Insured', desc: 'Public liability & professional indemnity' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Free No-Obligation Quotes</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-6">
              Let&apos;s get{' '}
              <span className="italic text-red-500" style={{ fontFamily: 'var(--font-playfair)' }}>started.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Fill in the form and we&apos;ll get back to you within 24 hours. Or give us a call — we&apos;re always happy to chat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6">Request a Quote</h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={150} className="lg:col-span-2 space-y-6">

              {/* Contact details */}
              <div className="bg-[#161616] border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-5 text-sm tracking-wide">Contact Directly</h3>
                <div className="space-y-5">
                  {[
                    {
                      label: 'Phone',
                      value: '07878 009694',
                      href: 'tel:07878009694',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    },
                    {
                      label: 'Email',
                      value: 'contact@arnoldlockhartelectrical.com',
                      href: 'mailto:contact@arnoldlockhartelectrical.com',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    },
                    {
                      label: 'Location',
                      value: 'Branston, Burton-on-Trent, Staffordshire',
                      href: null,
                      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                    },
                  ].map(({ label, value, href, icon }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white text-sm font-medium hover:text-red-500 transition-colors break-all">{value}</a>
                        ) : (
                          <p className="text-white text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accreditations */}
              <div className="bg-[#161616] border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 text-sm tracking-wide">Accreditations</h3>
                <div className="border-t border-white/5">
                  {accreditations.map(({ name, desc }) => (
                    <div key={name} className="flex items-center gap-3 py-3 border-b border-white/5">
                      <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-white text-xs font-semibold">{name}</p>
                        <p className="text-gray-500 text-[11px] mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="bg-red-600/8 border border-red-500/15 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-red-400 text-xs font-bold tracking-wide">Fast Response</p>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We aim to respond to all enquiries within 24 hours. For urgent matters, call us directly.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Bottom links ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0d0d0d] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6">
          {[
            { label: 'View our services', href: '/services' },
            { label: 'See our projects', href: '/projects' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
              {label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
