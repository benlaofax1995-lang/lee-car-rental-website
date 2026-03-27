'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur border-b border-white/8">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
            <span className="text-navy-900 font-black text-sm">L</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold text-sm tracking-wide">LEE CAR</div>
            <div className="text-gold-500 font-bold text-xs tracking-widest">RENTAL</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#fleet" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Fleet</Link>
          <Link href="/#how-it-works" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">How It Works</Link>
          <Link href="/#about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About</Link>
          <Link href="/#contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:7144626427" className="flex items-center gap-1.5 text-gold-500 hover:text-gold-400 text-sm font-semibold transition-colors">
            <Phone className="w-4 h-4" />
            (714) 462-6427
          </a>
          <Link href="/fleet" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white p-1">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-white/8 px-4 py-4 flex flex-col gap-4">
          <Link href="/#fleet" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">Fleet</Link>
          <Link href="/#how-it-works" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">How It Works</Link>
          <Link href="/#about" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">About</Link>
          <Link href="/#contact" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">Contact</Link>
          <a href="tel:7144626427" className="text-gold-500 font-semibold text-sm flex items-center gap-2">
            <Phone className="w-4 h-4" /> (714) 462-6427
          </a>
          <Link href="/fleet" onClick={() => setOpen(false)} className="bg-gold-500 text-navy-900 font-bold text-sm px-4 py-2.5 rounded-lg text-center">
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
