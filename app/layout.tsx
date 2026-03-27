import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lee Car Rental — Garden Grove, CA',
  description: 'Affordable car rentals in Garden Grove, CA. New, well-maintained vehicles. Private and Turo bookings available.',
  keywords: 'car rental, Garden Grove, Orange County, California, van rental, affordable rental',
  openGraph: {
    title: 'Lee Car Rental',
    description: 'Affordable car rentals in Garden Grove, CA',
    url: 'https://www.leecarrental.com',
    siteName: 'Lee Car Rental',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
