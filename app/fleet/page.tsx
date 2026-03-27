import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VehicleCard from '@/components/VehicleCard'
import { VEHICLES } from '@/lib/vehicles'

export const metadata = {
  title: 'Fleet — Lee Car Rental',
  description: 'Browse our fleet of clean, well-maintained rental vehicles in Garden Grove, CA.',
}

export default function FleetPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16" style={{background: 'rgba(13,17,32,0.6)'}}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{color: '#e6a817'}}>Available Now</p>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Our Fleet</h1>
              <p className="text-gray-400 text-lg max-w-xl">
                All vehicles are clean, fully insured, and regularly maintained. Private bookings get the best rates — no platform fees.
              </p>
            </div>

            {VEHICLES.length === 0 ? (
              <div className="text-center py-20 text-gray-500">No vehicles listed yet.</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {VEHICLES.map((v) => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
