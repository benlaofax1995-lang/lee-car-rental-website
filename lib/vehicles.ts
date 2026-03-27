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
  features: string[]
  turoUrl: string
  turoId: string
  available: boolean
}

export const VEHICLES: Vehicle[] = [
  // ── Vans ──────────────────────────────────────────────────────
  {
    id: 'ford-transit-3266047',
    name: '2024 Ford Transit XLT',
    year: 2024,
    make: 'Ford',
    model: 'Transit',
    trim: 'XLT 12-Passenger',
    category: 'Van',
    description: '2024 Ford Transit XLT 12-passenger van — ideal for group travel, airport shuttles, team trips, and family outings. Clean, spacious, and well-maintained.',
    seats: 12,
    dailyRate: 151,
    features: ['12 Passenger Seats', 'Backup Camera', 'Bluetooth', 'A/C', 'USB Charging', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/van-rental/united-states/garden-grove-ca/ford/transit/3266047',
    turoId: '3266047',
    available: true,
  },
  {
    id: 'ford-transit-2767696',
    name: '2023 Ford Transit XLT',
    year: 2023,
    make: 'Ford',
    model: 'Transit',
    trim: 'XLT 12-Passenger',
    category: 'Van',
    description: '2023 Ford Transit XLT 12-passenger van — ideal for group travel, airport shuttles, team trips, and family outings. Clean, spacious, and well-maintained.',
    seats: 12,
    dailyRate: 151,
    features: ['12 Passenger Seats', 'Backup Camera', 'Bluetooth', 'A/C', 'USB Charging', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/van-rental/united-states/garden-grove-ca/ford/transit/2767696',
    turoId: '2767696',
    available: true,
  },
  {
    id: 'ford-transit-150-2049638',
    name: '2020 Ford Transit-150 Wagon',
    year: 2020,
    make: 'Ford',
    model: 'Transit-150 Wagon',
    trim: '10-Passenger',
    category: 'Van',
    description: '2020 Ford Transit-150 passenger van — comfortable seating for up to 10 people. Great for group trips, airport runs, and family travel.',
    seats: 10,
    dailyRate: 151,
    features: ['10 Passenger Seats', 'Backup Camera', 'Bluetooth', 'A/C', 'USB Charging', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/van-rental/united-states/garden-grove-ca/ford/transit-150-wagon/2049638',
    turoId: '2049638',
    available: true,
  },

  // ── SUVs ──────────────────────────────────────────────────────
  {
    id: 'nissan-pathfinder-3258349',
    name: '2025 Nissan Pathfinder',
    year: 2025,
    make: 'Nissan',
    model: 'Pathfinder',
    category: 'SUV',
    description: 'Brand new 2025 Nissan Pathfinder with 3 rows and 7 seats. Ideal for family trips, road trips, and any time you need space and comfort.',
    seats: 7,
    dailyRate: 62,
    features: ['7 Seats', 'Apple CarPlay', 'Backup Camera', 'Blind Spot Warning', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/pathfinder/3258349',
    turoId: '3258349',
    available: true,
  },
  {
    id: 'nissan-pathfinder-3104544',
    name: '2025 Nissan Pathfinder',
    year: 2025,
    make: 'Nissan',
    model: 'Pathfinder',
    category: 'SUV',
    description: 'Brand new 2025 Nissan Pathfinder with 3 rows and 7 seats. Ideal for family trips, road trips, and any time you need space and comfort.',
    seats: 7,
    dailyRate: 62,
    features: ['7 Seats', 'Apple CarPlay', 'Backup Camera', 'Blind Spot Warning', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/pathfinder/3104544',
    turoId: '3104544',
    available: true,
  },
  {
    id: 'ford-bronco-sport-2776774',
    name: '2024 Ford Bronco Sport',
    year: 2024,
    make: 'Ford',
    model: 'Bronco Sport',
    category: 'SUV',
    description: 'Rugged and stylish 2024 Ford Bronco Sport. Perfect for adventures, weekend getaways, and everyday driving with a fun, bold look.',
    seats: 5,
    dailyRate: 63,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'AWD', 'Cruise Control', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/ford/bronco-sport/2776774',
    turoId: '2776774',
    available: true,
  },
  {
    id: 'nissan-rogue-2034224',
    name: '2023 Nissan Rogue',
    year: 2023,
    make: 'Nissan',
    model: 'Rogue',
    category: 'SUV',
    description: 'Comfortable and fuel-efficient 2023 Nissan Rogue. A reliable family SUV with modern safety features and plenty of cargo space.',
    seats: 5,
    dailyRate: 50,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'Lane Assist', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/rogue/2034224',
    turoId: '2034224',
    available: true,
  },
  {
    id: 'nissan-rogue-2034193',
    name: '2023 Nissan Rogue',
    year: 2023,
    make: 'Nissan',
    model: 'Rogue',
    category: 'SUV',
    description: 'Comfortable and fuel-efficient 2023 Nissan Rogue. A reliable family SUV with modern safety features and plenty of cargo space.',
    seats: 5,
    dailyRate: 51,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'Lane Assist', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/rogue/2034193',
    turoId: '2034193',
    available: true,
  },
  {
    id: 'nissan-kicks-1621724',
    name: '2023 Nissan Kicks',
    year: 2023,
    make: 'Nissan',
    model: 'Kicks',
    category: 'SUV',
    description: 'Sporty and fuel-efficient 2023 Nissan Kicks. Easy to drive with great gas mileage — a smart choice for city driving and road trips.',
    seats: 5,
    dailyRate: 43,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'USB Charging', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/kicks/1621724',
    turoId: '1621724',
    available: true,
  },
  {
    id: 'nissan-kicks-1624880',
    name: '2022 Nissan Kicks',
    year: 2022,
    make: 'Nissan',
    model: 'Kicks',
    category: 'SUV',
    description: 'Compact and efficient 2022 Nissan Kicks. Excellent fuel economy and easy parking — ideal for daily commutes and weekend trips.',
    seats: 5,
    dailyRate: 39,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'USB Charging', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/kicks/1624880',
    turoId: '1624880',
    available: true,
  },
  {
    id: 'nissan-kicks-1683258',
    name: '2022 Nissan Kicks',
    year: 2022,
    make: 'Nissan',
    model: 'Kicks',
    category: 'SUV',
    description: 'Compact and efficient 2022 Nissan Kicks. Excellent fuel economy and easy parking — ideal for daily commutes and weekend trips.',
    seats: 5,
    dailyRate: 51,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'USB Charging', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/nissan/kicks/1683258',
    turoId: '1683258',
    available: true,
  },
  {
    id: 'toyota-chr-1530743',
    name: '2019 Toyota C-HR',
    year: 2019,
    make: 'Toyota',
    model: 'C-HR',
    category: 'SUV',
    description: 'Stylish and distinctive 2019 Toyota C-HR. Unique design, smooth ride, and great fuel economy — a fun choice for any trip.',
    seats: 5,
    dailyRate: 54,
    features: ['Backup Camera', 'Bluetooth', 'USB Charging', 'A/C', 'Lane Departure Warning', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/suv-rental/united-states/garden-grove-ca/toyota/c-hr/1530743',
    turoId: '1530743',
    available: true,
  },

  // ── Sedans ────────────────────────────────────────────────────
  {
    id: 'nissan-sentra-3099964',
    name: '2025 Nissan Sentra',
    year: 2025,
    make: 'Nissan',
    model: 'Sentra',
    category: 'Sedan',
    description: 'Brand new 2025 Nissan Sentra. Fuel-efficient, comfortable, and easy to drive — great for business travel, airport runs, and everyday use.',
    seats: 5,
    dailyRate: 48,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'Lane Assist', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/car-rental/united-states/garden-grove-ca/nissan/sentra/3099964',
    turoId: '3099964',
    available: true,
  },
  {
    id: 'nissan-sentra-3099976',
    name: '2025 Nissan Sentra',
    year: 2025,
    make: 'Nissan',
    model: 'Sentra',
    category: 'Sedan',
    description: 'Brand new 2025 Nissan Sentra. Fuel-efficient, comfortable, and easy to drive — great for business travel, airport runs, and everyday use.',
    seats: 5,
    dailyRate: 48,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'Lane Assist', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/car-rental/united-states/garden-grove-ca/nissan/sentra/3099976',
    turoId: '3099976',
    available: true,
  },
  {
    id: 'nissan-sentra-2600381',
    name: '2024 Nissan Sentra',
    year: 2024,
    make: 'Nissan',
    model: 'Sentra',
    category: 'Sedan',
    description: '2024 Nissan Sentra. Fuel-efficient, comfortable, and easy to drive — great for business travel, airport runs, and everyday use.',
    seats: 5,
    dailyRate: 54,
    features: ['Apple CarPlay', 'Backup Camera', 'Bluetooth', 'Lane Assist', 'A/C', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/car-rental/united-states/garden-grove-ca/nissan/sentra/2600381',
    turoId: '2600381',
    available: true,
  },

  // ── Sports ────────────────────────────────────────────────────
  {
    id: 'dodge-challenger-2168514',
    name: '2023 Dodge Challenger',
    year: 2023,
    make: 'Dodge',
    model: 'Challenger',
    category: 'Sports',
    description: 'Turn heads in the 2023 Dodge Challenger. Iconic muscle car styling with a powerful engine — perfect for special occasions and weekend cruising.',
    seats: 5,
    dailyRate: 67,
    features: ['Backup Camera', 'Bluetooth', 'USB Charging', 'A/C', 'V6 Engine', 'Automatic'],
    turoUrl: 'https://turo.com/us/en/car-rental/united-states/garden-grove-ca/dodge/challenger/2168514',
    turoId: '2168514',
    available: true,
  },
]

export function getVehicle(id: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.id === id)
}

// Wikipedia Commons photos — free, no watermark, model-specific
const VEHICLE_PHOTOS: Record<string, string> = {
  'Transit':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2016_Ford_Transit_350_2.2.jpg/800px-2016_Ford_Transit_350_2.2.jpg',
  'Transit-150 Wagon':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ford_E-Series_wagon.jpg/800px-Ford_E-Series_wagon.jpg',
  'Bronco Sport':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/2021_Ford_Bronco_Sport_Big_Bend%2C_front_3.15.21.jpg/800px-2021_Ford_Bronco_Sport_Big_Bend%2C_front_3.15.21.jpg',
  'Pathfinder':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2023_Nissan_Pathfinder_Platinum_4WD_in_Baja_Storm_Metallic%2C_front_left.jpg/800px-2023_Nissan_Pathfinder_Platinum_4WD_in_Baja_Storm_Metallic%2C_front_left.jpg',
  'Kicks':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2025_Nissan_Kicks_SV_AWD_in_Deep_Blue_Pearl%2C_front_right%2C_2024-10-06.jpg/800px-2025_Nissan_Kicks_SV_AWD_in_Deep_Blue_Pearl%2C_front_right%2C_2024-10-06.jpg',
  'Rogue':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/2023_Nissan_Rogue_SV_in_Super_Black%2C_front_left.jpg/800px-2023_Nissan_Rogue_SV_in_Super_Black%2C_front_left.jpg',
  'Sentra':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2024_Nissan_Sentra_%28B18%29_DSC_3754.jpg/800px-2024_Nissan_Sentra_%28B18%29_DSC_3754.jpg',
  'Challenger':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221_%28cropped%29.jpg/800px-Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221_%28cropped%29.jpg',
  'C-HR':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Toyota_C-HR_Hybrid_%28AX20%29_DSC_7239.jpg/800px-Toyota_C-HR_Hybrid_%28AX20%29_DSC_7239.jpg',
}

export function getVehicleImageUrl(vehicle: Vehicle): string {
  return VEHICLE_PHOTOS[vehicle.model] ?? VEHICLE_PHOTOS['Rogue']!
}
