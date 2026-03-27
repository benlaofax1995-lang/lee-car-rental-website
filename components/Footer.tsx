import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-white/8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-black text-sm">L</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-wide">LEE CAR RENTAL</div>
              <div className="text-gray-500 text-xs">Garden Grove, CA</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Where quality meets convenience. Affordable, well-maintained vehicles for every need.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <div className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Quick Links</div>
          <div className="flex flex-col gap-2">
            <Link href="/fleet" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Browse Fleet</Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">How It Works</Link>
            <Link href="/#about" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">About Us</Link>
            <Link href="/#contact" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Contact</div>
          <div className="flex flex-col gap-3">
            <a href="tel:7144626427" className="flex items-center gap-2 text-gray-400 hover:text-brand-400 text-sm transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              (714) 462-6427
            </a>
            <a href="mailto:support@leecarrental.com" className="flex items-center gap-2 text-gray-400 hover:text-brand-400 text-sm transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              support@leecarrental.com
            </a>
            <div className="flex items-start gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>11711 Westminster Ave STE #3C<br />Garden Grove, CA 92843</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Lee Car Rental. All rights reserved.</p>
          <p className="text-gray-700 text-xs">24/7 Customer Support Available</p>
        </div>
      </div>
    </footer>
  )
}
