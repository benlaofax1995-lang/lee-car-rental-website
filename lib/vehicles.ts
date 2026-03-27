export interface Vehicle {
  id: string
  name: string
  year: number
  make: string
  model: string
  trim?: string
  category: string
  description: string
  seats: number
  dailyRate: number
  weeklyRate?: number
  features: string[]
  turoUrl: string
  turoId: string
  images: string[] // placeholder — replace with real Turo image URLs
  available: boolean
}

// Update these with your real vehicles and Turo listing IDs
export const VEHICLES: Vehicle[] = [
  {
    id: 'ford-transit-van',
    name: 'Ford Transit Van',
    year: 2022,
    make: 'Ford',
    model: 'Transit',
    trim: 'Cargo Van',
    category: 'Van',
    description:
      'Spacious and versatile Ford Transit cargo van — perfect for moves, deliveries, road trips, and group travel. Well-maintained with plenty of cargo room and comfortable seating.',
    seats: 3,
    dailyRate: 120,
    weeklyRate: 750,
    features: ['Bluetooth', 'Backup Camera', 'USB Charging', 'A/C', 'Cargo Space', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/van-rental/united-states/garden-grove-ca/ford/transit/3266047',
    turoId: '3266047',
    images: ['/vehicles/transit-1.jpg'],
    available: true,
  },
  // Add more vehicles here
]

export function getVehicle(id: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.id === id)
}
