import { notFound } from 'next/navigation'
import { getVehicle } from '@/lib/vehicles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

export default async function BookPage({ params }: { params: Promise<{ vehicleId: string }> }) {
  const { vehicleId } = await params
  const vehicle = getVehicle(vehicleId)
  if (!vehicle) notFound()

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16 max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{color: '#e6a817'}}>Private Booking</p>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <p className="text-gray-400">
              ${vehicle.dailyRate}/day
              {vehicle.weeklyRate ? ` · $${vehicle.weeklyRate}/week` : ''}
            </p>
          </div>
          <BookingForm vehicle={vehicle} />
        </section>
      </main>
      <Footer />
    </>
  )
}
