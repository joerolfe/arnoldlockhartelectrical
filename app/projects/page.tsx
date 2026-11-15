'use client'

import Link from 'next/link'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import FadeIn from '@/components/FadeIn'
import Scene from '@/components/home/Scene'
import ScrubHeading from '@/components/home/ScrubHeading'
import CountUp from '@/components/home/CountUp'
import PageEffects from '@/components/home/PageEffects'
import { useState } from 'react'

const projects = [
  {
    name: 'Aston Martin',
    type: 'Commercial Fit-Out',
    category: 'commercial',
    location: 'Midlands',
    description: 'Full electrical installation for a prestigious Aston Martin dealership — high-spec lighting systems, power distribution, and bespoke showroom electrical throughout.',
    tags: ['Lighting', 'Power', 'Fit-Out'],
  },
  {
    name: 'Trent Bridge',
    type: 'Stadium & Events',
    category: 'commercial',
    location: 'Nottingham',
    description: 'Electrical works across the iconic Trent Bridge cricket ground, including floodlighting, power infrastructure, and event facilities.',
    tags: ['Stadium', 'Lighting', 'Events'],
  },
  {
    name: 'Timpsons HQ',
    type: 'Corporate Headquarters',
    category: 'commercial',
    location: 'Midlands',
    description: 'Complete electrical fit-out of a major corporate headquarters — open-plan office wiring, data cabling, emergency lighting, and security systems.',
    tags: ['Office', 'Data', 'Security'],
  },
  {
    name: 'St Peters Gate',
    type: 'Retail & Hospitality',
    category: 'commercial',
    location: 'Nottingham',
    description: 'Atmospheric electrical installation for a premium hospitality venue — feature lighting, back-of-house power, and fire alarm systems.',
    tags: ['Hospitality', 'Lighting', 'Fire Safety'],
  },
  {
    name: 'Deciem',
    type: 'Retail Installation',
    category: 'commercial',
    location: 'Edinburgh',
    description: 'Premium retail electrical installation for international skincare brand Deciem — clean, minimal lighting to match their distinct aesthetic.',
    tags: ['Retail', 'Lighting'],
  },
  {
    name: 'Barn Conversions',
    type: 'Domestic Projects',
    category: 'domestic',
    location: 'Staffordshire & Derbyshire',
    description: 'Multiple barn conversion projects — full rewires, smart lighting, and EV charging points, bringing beautiful rural properties into the 21st century.',
    tags: ['Rewire', 'EV Charging', 'Smart'],
  },
  {
    name: 'Industrial Rewires',
    type: 'Industrial',
    category: 'commercial',
    location: 'Midlands',
    description: 'Industrial electrical rewiring including three-phase power, heavy machinery circuits, and full distribution board replacements for manufacturing clients.',
    tags: ['Three Phase', 'Industrial', 'Distribution'],
  },
  {
    name: 'Residential Developments',
    type: 'New Build',
    category: 'domestic',
    location: 'Burton-on-Trent',
    description: 'First-fix and second-fix electrical installations for residential developers — fast, reliable, and certified to keep builds on schedule.',
    tags: ['New Build', 'First Fix', 'Second Fix'],
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Domestic', value: 'domestic' },
]

const stats = [
  { value: '8+', label: 'Featured Projects' },
  { value: '500+', label: 'Total Completed' },
  { value: '15+', label: 'Years Experience' },
]

const eyebrow = 'eyebrow text-red-500 text-xs font-semibold tracking-[0.2em] uppercase'
const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties

export default function ProjectsPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      <PageEffects />

      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section data-glow className="relative min-h-[100svh] flex flex-col bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0 hero-glow" aria-hidden />

        <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-10 sm:pb-14">
          <div>
            <p className={`hero-in ${eyebrow} mb-5 sm:mb-7`} style={delay(0)}>Case Studies</p>
            <h1 className="page-hero-title font-black text-white leading-[0.98] tracking-tight mb-7 sm:mb-10">
              <span className="hero-mask"><span className="whitespace-nowrap" style={delay(120)}>Projects</span></span>
              <span className="hero-mask"><span className="whitespace-nowrap" style={delay(220)}>that speak</span></span>
              <span className="hero-mask hero-mask-italic">
                <span className="whitespace-nowrap italic text-red-500" style={{ ...delay(320), fontFamily: 'var(--font-playfair)' }}>for themselves.</span>
              </span>
            </h1>
            <p className="hero-in text-gray-200 text-lg sm:text-2xl leading-relaxed max-w-2xl" style={delay(600)}>
              From a prestigious Aston Martin dealership to hundreds of domestic rewires — every project gets the same standard.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={delay(750)}>
          <div className="grid grid-cols-3 gap-x-4 sm:gap-x-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-5 sm:py-7 border-t border-white/10">
                <p className="text-3xl sm:text-5xl font-black text-white tracking-tight"><CountUp value={value} /></p>
                <p className="text-gray-500 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase mt-1.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter pills */}
          <FadeIn variant="lux" className="flex items-center gap-2 mb-12 sm:mb-16">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  active === f.value
                    ? 'bg-white text-black'
                    : 'border border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
                }`}
              >
                {f.label}
                <span className={`ml-1.5 text-[10px] ${active === f.value ? 'text-black/50' : 'text-gray-600'}`}>
                  {f.value === 'all' ? projects.length : projects.filter(p => p.category === f.value).length}
                </span>
              </button>
            ))}
          </FadeIn>

          {/* Project grid — two staggered columns; re-keyed so each filter change replays the reveal */}
          <div key={active} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-14 sm:gap-y-20">
            {filtered.map((project, i) => (
              <FadeIn
                key={project.name}
                variant="lux"
                delay={(i % 2) * 120}
                className="sm:even:mt-24 lg:even:mt-32"
              >
                <article className="proj-card group">
                  {/* Placeholder photo */}
                  <Scene mode="enter" start={1} end={0.4} initial={1}>
                    <div className="zoom-frame relative aspect-[4/3] overflow-hidden">
                      <div className="zoom-inner absolute inset-0">
                        <div className="proj-media absolute inset-0">
                          <PhotoPlaceholder />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                        <span className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold tracking-[0.15em] uppercase rounded-full">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </Scene>

                  {/* Info */}
                  <div className="pt-6 sm:pt-7">
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h3 className="text-white group-hover:text-red-400 transition-colors duration-500 font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight">{project.name}</h3>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-[11px] font-medium tracking-wide text-gray-400 border border-white/10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section data-glow className="relative py-24 sm:py-32 lg:py-44 bg-[#0b0b0b] border-t border-white/8 overflow-hidden">
        <div className="absolute inset-0 hero-glow" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <ScrubHeading
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6 sm:mb-8"
            segments={[{ text: 'Have a project in mind?' }]}
          />
          <FadeIn variant="lux" className="flex flex-col items-center">
            <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-md">Whether it&apos;s domestic, commercial, or something a little different — let&apos;s talk.</p>
            <Link href="/contact" className="nav-cta group inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-full text-sm">
              Start a Conversation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
