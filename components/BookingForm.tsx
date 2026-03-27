'use client'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import type { Vehicle } from '@/lib/vehicles'
import { submitBookingRequest } from '@/lib/supabase'

export default function BookingForm({ vehicle }: { vehicle: Vehicle }) {
  const [form, setForm] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    start_date: '',
    end_date: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const totalDays = form.start_date && form.end_date
    ? Math.max(1, Math.ceil((new Date(form.end_date).getTime() - new Date(form.start_date).getTime()) / 86400000))
    : null

  const estimatedTotal = totalDays
    ? (vehicle.weeklyRate && totalDays >= 7
        ? Math.floor(totalDays / 7) * vehicle.weeklyRate + (totalDays % 7) * vehicle.dailyRate
        : totalDays * vehicle.dailyRate)
    : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.start_date || !form.end_date) { setErrorMsg('Please select start and end dates'); return }
    if (form.start_date >= form.end_date) { setErrorMsg('End date must be after start date'); return }
    setStatus('loading')
    const result = await submitBookingRequest({
      vehicle_id: vehicle.id,
      vehicle_name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      ...form,
    })
    if (result.success) {
      setStatus('success')
    } else {
      setErrorMsg(result.error ?? 'Something went wrong. Please call us directly.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl p-10 text-center" style={{background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)'}}>
        <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{color: '#4ade80'}} />
        <h2 className="text-2xl font-bold text-white mb-3">Request Received!</h2>
        <p className="text-gray-400 mb-2">We&apos;ll confirm your booking within a few hours.</p>
        <p className="text-gray-500 text-sm">Need it sooner? Call us at <a href="tel:7144626427" className="underline" style={{color: '#e6a817'}}>(714) 462-6427</a></p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-5" style={{background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)'}}>
      {(status === 'error') && (
        <div className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm" style={{background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5'}}>
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Full Name *</label>
        <input
          required
          type="text"
          value={form.customer_name}
          onChange={(e) => setForm(p => ({ ...p, customer_name: e.target.value }))}
          placeholder="Your full name"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:outline-none"
          style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Email *</label>
          <input
            required
            type="email"
            value={form.customer_email}
            onChange={(e) => setForm(p => ({ ...p, customer_email: e.target.value }))}
            placeholder="you@email.com"
            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
            style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Phone *</label>
          <input
            required
            type="tel"
            value={form.customer_phone}
            onChange={(e) => setForm(p => ({ ...p, customer_phone: e.target.value }))}
            placeholder="(714) 000-0000"
            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
            style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}
          />
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Pickup Date *</label>
          <input
            required
            type="date"
            value={form.start_date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setForm(p => ({ ...p, start_date: e.target.value }))}
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
            style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark'}}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Return Date *</label>
          <input
            required
            type="date"
            value={form.end_date}
            min={form.start_date || new Date().toISOString().split('T')[0]}
            onChange={(e) => setForm(p => ({ ...p, end_date: e.target.value }))}
            className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
            style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark'}}
          />
        </div>
      </div>

      {/* Estimate */}
      {estimatedTotal !== null && (
        <div className="rounded-xl px-4 py-3 flex items-center justify-between" style={{background: 'rgba(230,168,23,0.08)', border: '1px solid rgba(230,168,23,0.2)'}}>
          <span className="text-sm" style={{color: '#e6a817'}}>{totalDays} day{totalDays !== 1 ? 's' : ''} estimated</span>
          <span className="font-bold text-white">${estimatedTotal.toLocaleString()}</span>
        </div>
      )}

      {/* Notes */}
      <div>
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Notes <span className="normal-case font-normal text-gray-600">(optional)</span></label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm(p => ({ ...p, notes: e.target.value }))}
          placeholder="Anything we should know — pickup location preference, number of drivers, etc."
          rows={3}
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none resize-none"
          style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full font-bold py-3.5 rounded-xl text-sm transition-opacity disabled:opacity-60"
        style={{background: '#e6a817', color: '#07090f'}}
      >
        {status === 'loading' ? 'Submitting…' : 'Submit Booking Request'}
      </button>

      <p className="text-center text-xs text-gray-600">
        This is a request — not an instant charge. We&apos;ll contact you to confirm details.
      </p>
    </form>
  )
}
