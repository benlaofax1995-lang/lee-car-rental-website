import Link from 'next/link'
import { Phone, Mail, MapPin, CheckCircle, Calendar, Car, Shield, Clock, Star, ExternalLink, Quote } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VehicleCard from '@/components/VehicleCard'
import { VEHICLES } from '@/lib/vehicles'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at top right, rgba(239,68,68,0.12), transparent 60%)'}} />
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

          <div className="relative max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6" style={{background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.2)'}}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{background: '#ef4444'}} />
                <span className="text-xs font-semibold tracking-wide uppercase" style={{color: '#f87171'}}>Garden Grove, CA</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6">
                <span className="text-white">TOP CAR</span><br />
                <span style={{color: '#ef4444'}}>RENTAL</span><br />
                <span className="text-white">DEALS</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                New, well-maintained vehicles at affordable rates. Short and long-term rentals available. Private bookings or book directly on Turo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="https://turo.com/us/en/drivers/25245035" target="_blank" rel="noopener noreferrer" style={{background: '#ef4444'}} className="hover:opacity-90 font-bold px-8 py-4 rounded-xl text-base transition-opacity inline-flex items-center justify-center gap-2" >
                  <ExternalLink className="w-5 h-5" style={{color: '#07090f'}} />
                  <span style={{color: '#07090f'}}>Book on Turo</span>
                </a>
                <Link href="/fleet" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors inline-flex items-center justify-center gap-2">
                  <Car className="w-5 h-5" />
                  Browse Fleet
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
              <div className="rounded-2xl p-6 space-y-4" style={{background: 'rgba(13,17,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)'}}>
                <div className="pb-4 space-y-3" style={{borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
                  <a href="https://www.google.com/maps/search/Lee+Car+Rental+Garden+Grove+CA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(66,133,244,0.15)'}}>
                      <span className="font-bold text-lg" style={{color: '#4285f4'}}>G</span>
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-center gap-1">
                        5.0
                        <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</span>
                      </div>
                      <div className="text-gray-500 text-sm">211 reviews on Google</div>
                    </div>
                  </a>
                  <a href="https://turo.com/us/en/drivers/25245035" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(239,68,68,0.15)'}}>
                      <Star className="w-5 h-5" style={{color: '#ef4444'}} />
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-center gap-1">
                        5.0
                        <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</span>
                      </div>
                      <div className="text-gray-500 text-sm">Top rated on Turo</div>
                    </div>
                  </a>
                </div>
                {[
                  { icon: CheckCircle, label: 'Clean, inspected vehicles', color: '#4ade80' },
                  { icon: Clock, label: '24/7 customer support', color: '#60a5fa' },
                  { icon: Shield, label: 'Fully insured fleet', color: '#c084fc' },
                  { icon: Calendar, label: 'Flexible rental periods', color: '#ef4444' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{color}} />
                    <span className="text-gray-300 text-sm">{label}</span>
                  </div>
                ))}
                <div className="pt-2" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
                  <div className="text-gray-500 text-xs">Starting from</div>
                  <div className="text-3xl font-black text-white">$39<span className="text-base font-normal text-gray-500">/day</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social Proof Bar ──────────────────────────────────── */}
        <section className="py-4" style={{background: '#0a0e1a', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
          <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <a href="https://www.google.com/maps/search/Lee+Car+Rental+Garden+Grove+CA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
              <span className="font-black text-xl" style={{color: '#4285f4'}}>G</span>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-sm">5.0</span>
                <span className="flex">{[...Array(5)].map((_, i) => <Star key={`g${i}`} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</span>
              </div>
              <span className="text-gray-500 text-xs">211 reviews</span>
            </a>
            <a href="https://turo.com/us/en/drivers/25245035" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
              <span className="font-black text-sm" style={{color: '#ef4444'}}>T</span>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-sm">5.0</span>
                <span className="flex">{[...Array(5)].map((_, i) => <Star key={`t${i}`} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</span>
              </div>
              <span className="text-gray-500 text-xs">Top rated host</span>
            </a>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{color: '#4ade80'}} />
              <span className="text-gray-400 text-xs font-medium">Fully Insured Fleet</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{color: '#60a5fa'}} />
              <span className="text-gray-400 text-xs font-medium">24/7 Support</span>
            </div>
          </div>
        </section>

        {/* ── How It Works ───────────────────────────────────────── */}
        <section id="how-it-works" className="py-24" style={{background: 'rgba(13,17,32,0.4)'}}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How to Book</h2>
              <p className="text-gray-400 text-lg">Simple and secure through Turo</p>
            </div>
            <div className="rounded-2xl p-8 md:p-12" style={{background: '#0d1120', border: '1px solid rgba(239,68,68,0.3)'}}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(239,68,68,0.15)'}}>
                    <span className="font-black text-2xl" style={{color: '#ef4444'}}>T</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-4">Book on Turo</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    All bookings are handled through Turo — a trusted peer-to-peer car sharing platform. Get instant confirmation, flexible protection plans, and a seamless pickup experience.
                  </p>
                  <a href="https://turo.com/us/en/drivers/25245035" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
                    style={{background: '#ef4444', color: '#07090f'}}>
                    <ExternalLink className="w-4 h-4" />
                    View Our Turo Listings
                  </a>
                </div>
                <ol className="space-y-5">
                  {[
                    { step: '1', title: 'Browse our fleet', desc: 'Find the right vehicle for your trip on this page or directly on Turo.' },
                    { step: '2', title: 'Select your dates', desc: 'Pick your pickup and return dates. Check availability instantly.' },
                    { step: '3', title: 'Choose a protection plan', desc: 'Turo offers multiple coverage options to fit your needs.' },
                    { step: '4', title: 'Instant confirmation', desc: 'Get confirmed right away and coordinate pickup details in the Turo app.' },
                  ].map(({ step, title, desc }) => (
                    <li key={step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5" style={{background: 'rgba(239,68,68,0.2)', color: '#f87171'}}>{step}</span>
                      <div>
                        <div className="text-white font-semibold text-sm mb-0.5">{title}</div>
                        <div className="text-gray-500 text-sm">{desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fleet ──────────────────────────────────────────────── */}
        <section id="fleet" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Fleet</h2>
                <p className="text-gray-400">All vehicles are clean, insured, and well-maintained</p>
              </div>
              <Link href="/fleet" className="hidden sm:block text-sm font-semibold transition-colors" style={{color: '#ef4444'}}>
                View All →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VEHICLES.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ─────────────────────────────────────────────── */}
        <section id="reviews" className="py-24" style={{background: 'rgba(13,17,32,0.4)'}}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="font-black text-2xl" style={{color: '#4285f4'}}>G</span>
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={`rev${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
                <span className="text-white font-bold text-lg">5.0</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Our Customers Say</h2>
              <p className="text-gray-400 text-lg">211 five-star reviews on Google</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  text: 'Amazing service! The van was spotless and exactly what we needed for our family trip. Le was super responsive and made the whole process easy. Will definitely rent again!',
                  vehicle: 'Ford Transit',
                  date: 'Feb 2026',
                },
                {
                  name: 'David L.',
                  text: 'Best rental experience I\'ve had. Car was clean, well-maintained, and the price was very fair. Communication was fast and pickup was smooth. Highly recommend!',
                  vehicle: 'Nissan Rogue',
                  date: 'Jan 2026',
                },
                {
                  name: 'Michelle T.',
                  text: 'We rented the Pathfinder for a road trip and it was perfect. Great gas mileage, comfortable ride, and Le made sure everything was ready for us. Five stars all the way!',
                  vehicle: 'Nissan Pathfinder',
                  date: 'Mar 2026',
                },
                {
                  name: 'James K.',
                  text: 'Rented the Challenger for a weekend getaway — what a blast! Car was in great shape and Le was easy to work with. Pickup and drop-off couldn\'t have been simpler.',
                  vehicle: 'Dodge Challenger',
                  date: 'Dec 2025',
                },
                {
                  name: 'Patricia R.',
                  text: 'We needed a 12-passenger van for a church event and Lee Car Rental came through. The Transit was clean, drove great, and the rate was unbeatable. Thank you!',
                  vehicle: 'Ford Transit',
                  date: 'Jan 2026',
                },
                {
                  name: 'Kevin W.',
                  text: 'Very professional and the cars are always clean. I\'ve rented from Lee multiple times now and every experience has been smooth. They really care about their customers.',
                  vehicle: 'Nissan Sentra',
                  date: 'Feb 2026',
                },
              ].map(({ name, text, vehicle, date }) => (
                <div key={name} className="rounded-2xl p-6 flex flex-col" style={{background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)'}}>
                  <Quote className="w-5 h-5 mb-3 opacity-30" style={{color: '#ef4444'}} />
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">&ldquo;{text}&rdquo;</p>
                  <div className="flex items-center justify-between pt-3" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
                    <div>
                      <div className="text-white font-semibold text-sm">{name}</div>
                      <div className="text-gray-600 text-xs">{vehicle} &middot; {date}</div>
                    </div>
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={`${name}${i}`} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="https://www.google.com/maps/search/Lee+Car+Rental+Garden+Grove+CA" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{color: '#ef4444'}}>
                Read all 211 reviews on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────────── */}
        <section id="about" className="py-24" style={{background: 'rgba(13,17,32,0.4)'}}>
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">About Lee Car Rental</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                We&apos;re a family-owned car rental business based in Garden Grove, CA, serving Orange County and surrounding areas. Our focus is simple: clean, reliable vehicles at honest prices with real personal service.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every vehicle is regularly inspected, maintained, and cleaned before each rental. Whether you need a vehicle for a day or a month, we have flexible options to fit your needs and budget.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Serving Since', value: '2018' },
                  { label: 'Support', value: '24/7' },
                  { label: 'Location', value: 'Garden Grove' },
                  { label: 'Google Reviews', value: '5★ (211)' },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl p-4" style={{background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)'}}>
                    <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</div>
                    <div className="text-white font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 space-y-5" style={{background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)'}}>
              <h3 className="text-white font-bold text-xl">Why Choose Us?</h3>
              {[
                { title: 'No Hidden Fees', desc: 'Transparent pricing. What you see is what you pay.' },
                { title: 'New Vehicles', desc: 'Our fleet is regularly updated with newer models.' },
                { title: 'Personal Service', desc: "You're dealing directly with the owner, not a call center." },
                { title: 'Flexible Pickup', desc: 'Convenient pickup in Garden Grove, CA.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#ef4444'}} />
                  <div>
                    <div className="text-white font-semibold text-sm">{title}</div>
                    <div className="text-gray-500 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────── */}
        <section id="contact" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in Touch</h2>
              <p className="text-gray-400">Questions? Ready to book? Reach out anytime.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                { icon: Phone, label: 'Phone', value: '(714) 462-6427', href: 'tel:7144626427' },
                { icon: Mail, label: 'Email', value: 'support@leecarrental.com', href: 'mailto:support@leecarrental.com' },
                { icon: MapPin, label: 'Address', value: '11711 Westminster Ave\nSTE #3C, Garden Grove CA 92843', href: 'https://maps.google.com/?q=11711+Westminster+Ave+Garden+Grove+CA' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={label === 'Address' ? '_blank' : undefined} rel="noopener noreferrer"
                  className="rounded-2xl p-6 text-center transition-all group block"
                  style={{background: '#0d1120', border: '1px solid rgba(255,255,255,0.08)'}}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors" style={{background: 'rgba(239,68,68,0.1)'}}>
                    <Icon className="w-5 h-5" style={{color: '#ef4444'}} />
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide mb-2">{label}</div>
                  <div className="text-white font-semibold text-sm whitespace-pre-line">{value}</div>
                </a>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-64" style={{border: '1px solid rgba(255,255,255,0.08)'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.3!2d-117.92556!3d33.760958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7f6b6b6b6b7%3A0x0!2s11711+Westminster+Ave%2C+Garden+Grove%2C+CA+92843!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
