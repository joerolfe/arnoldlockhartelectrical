'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    name: 'Aston Martin',
    type: 'Commercial Fit-Out',
    category: 'commercial',
    location: 'Midlands',
    description: 'Full electrical installation for a prestigious Aston Martin dealership — high-spec lighting systems, power distribution, and bespoke showroom electrical throughout.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    alt: 'Aston Martin dealership electrical installation',
    tags: ['Lighting', 'Power', 'Fit-Out'],
  },
  {
    name: 'Trent Bridge',
    type: 'Stadium & Events',
    category: 'commercial',
    location: 'Nottingham',
    description: 'Electrical works across the iconic Trent Bridge cricket ground, including floodlighting, power infrastructure, and event facilities.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    alt: 'Trent Bridge cricket ground',
    tags: ['Stadium', 'Lighting', 'Events'],
  },
  {
    name: 'Timpsons HQ',
    type: 'Corporate Headquarters',
    category: 'commercial',
    location: 'Midlands',
    description: 'Complete electrical fit-out of a major corporate headquarters — open-plan office wiring, data cabling, emergency lighting, and security systems.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    alt: 'Corporate office electrical installation',
    tags: ['Office', 'Data', 'Security'],
  },
  {
    name: 'St Peters Gate',
    type: 'Retail & Hospitality',
    category: 'commercial',
    location: 'Nottingham',
    description: 'Atmospheric electrical installation for a premium hospitality venue — feature lighting, back-of-house power, and fire alarm systems.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    alt: 'Restaurant and bar electrical installation',
    tags: ['Hospitality', 'Lighting', 'Fire Safety'],
  },
  {
    name: 'Deciem',
    type: 'Retail Installation',
    category: 'commercial',
    location: 'Edinburgh',
    description: 'Premium retail electrical installation for international skincare brand Deciem — clean, minimal lighting to match their distinct aesthetic.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    alt: 'Premium retail electrical installation',
    tags: ['Retail', 'Lighting'],
  },
  {
    name: 'Barn Conversions',
    type: 'Domestic Projects',
    category: 'domestic',
    location: 'Staffordshire & Derbyshire',
    description: 'Multiple barn conversion projects — full rewires, smart lighting, and EV charging points, bringing beautiful rural properties into the 21st century.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    alt: 'Barn conversion electrical installation',
    tags: ['Rewire', 'EV Charging', 'Smart'],
  },
  {
    name: 'Industrial Rewires',
    type: 'Industrial',
    category: 'commercial',
    location: 'Midlands',
    description: 'Industrial electrical rewiring including three-phase power, heavy machinery circuits, and full distribution board replacements for manufacturing clients.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80',
    alt: 'Industrial electrical installation',
    tags: ['Three Phase', 'Industrial', 'Distribution'],
  },
  {
    name: 'Residential Developments',
    type: 'New Build',
    category: 'domestic',
    location: 'Burton-on-Trent',
    description: 'First-fix and second-fix electrical installations for residential developers — fast, reliable, and certified to keep builds on schedule.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'New build residential electrical installation',
    tags: ['New Build', 'First Fix', 'Second Fix'],
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Domestic', value: 'domestic' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-6">
              Projects that speak{' '}
              <span className="italic text-red-500" style={{ fontFamily: 'var(--font-playfair)' }}>for themselves.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              From a prestigious Aston Martin dealership to hundreds of domestic rewires — every project gets the same standard.
            </p>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-white/8">
            {[
              { value: '8+', label: 'Featured Projects' },
              { value: '500+', label: 'Total Completed' },
              { value: '15+', label: 'Years Experience' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter pills */}
          <div className="flex items-center gap-2 mb-10 sm:mb-12">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                  active === f.value
                    ? 'bg-red-600 text-white'
                    : 'border border-white/8 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {f.label}
                <span className={`ml-1.5 text-[10px] ${active === f.value ? 'text-red-200' : 'text-gray-600'}`}>
                  {f.value === 'all' ? projects.length : projects.filter(p => p.category === f.value).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <div
                key={project.name}
                className="group bg-[#161616] border border-white/5 hover:border-red-500/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: 1,
                  animation: `fadeInUp 0.5s ease ${i * 60}ms both`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{project.name}</h3>
                    <div className="flex items-center gap-1 text-gray-600 text-xs flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-semibold text-gray-500 bg-white/4 border border-white/5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#0d0d0d] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Have a project in mind?</h2>
            <p className="text-gray-400 text-sm">Whether it&apos;s domestic, commercial, or something a little different — let&apos;s talk.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-colors text-sm flex-shrink-0">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
