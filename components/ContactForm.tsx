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

  const inputClass = "w-full px-4 py-3.5 bg-[#0d0d0d] border border-white/8 focus:border-red-500/40 focus:outline-none rounded-xl text-white placeholder-gray-600 text-sm transition-colors"

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 tracking-wide mb-2">Full Name <span className="text-red-500">*</span></label>
          <input name="name" type="text" required value={form.name} onChange={onChange} placeholder="John Smith" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 tracking-wide mb-2">Email <span className="text-red-500">*</span></label>
          <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@example.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 tracking-wide mb-2">Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="07700 000000" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 tracking-wide mb-2">Service Required</label>
          <select name="service" value={form.service} onChange={onChange} className={`${inputClass} appearance-none`}>
            <option value="">Select a service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-400 tracking-wide mb-2">Tell us about your project <span className="text-red-500">*</span></label>
        <textarea
          name="message" required rows={5} value={form.message} onChange={onChange}
          placeholder="Describe your project or requirements — the more detail the better."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full py-4 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 text-white font-bold rounded-full transition-colors text-sm flex items-center justify-center gap-2"
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
