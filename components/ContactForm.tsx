'use client'

import { useState } from 'react'

const services = [
  'Domestic Electrical',
  'Commercial Electrical',
  'Fire Alarm Systems',
  'CCTV & Security',
  'Consumer Unit Upgrade',
  'EICR / Testing',
  'EV Charger Installation',
  'Other',
]

type State = 'idle' | 'sending' | 'sent'

export default function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    await new Promise(r => setTimeout(r, 1200))
    setState('sent')
  }

  if (state === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message sent</h3>
        <p className="text-gray-400 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
          className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass = "field w-full px-4 py-4 bg-white/[0.03] border border-white/10 hover:border-white/20 focus:outline-none rounded-xl text-white placeholder-gray-600 text-sm"
  const labelClass = "block text-[11px] font-semibold text-white/50 tracking-[0.15em] uppercase mb-2.5"

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
          <input name="name" type="text" required value={form.name} onChange={onChange} placeholder="John Smith" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email <span className="text-red-500">*</span></label>
          <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@example.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="07700 000000" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Service Required</label>
          <div className="relative">
            <select name="service" value={form.service} onChange={onChange} className={`${inputClass} appearance-none pr-10`}>
              <option value="">Select a service...</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>Tell us about your project <span className="text-red-500">*</span></label>
        <textarea
          name="message" required rows={5} value={form.message} onChange={onChange}
          placeholder="Describe your project or requirements — the more detail the better."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'sending'}
        className="nav-cta w-full py-4 disabled:opacity-60 text-white font-bold rounded-full text-sm flex items-center justify-center gap-2"
      >
        {state === 'sending' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : 'Send Message'}
      </button>
      <p className="text-gray-600 text-xs text-center">We&apos;ll respond within 24 hours. No spam, ever.</p>
    </form>
  )
}
