import { Users, Star, ExternalLink } from 'lucide-react'
import type { Vehicle } from '@/lib/vehicles'

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="bg-navy-800 border border-white/8 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-navy-700 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="text-5xl mb-2">🚐</div>
            <div className="text-xs text-gray-500">Photo coming soon</div>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-navy-900/80 backdrop-blur text-xs text-gray-300 px-2 py-1 rounded-full border border-white/10">
            {vehicle.category}
          </span>
        </div>
        {vehicle.available ? (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500/20 border border-green-500/40 text-green-400 text-xs px-2 py-1 rounded-full font-medium">
              Available
            </span>
          </div>
        ) : (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500/20 border border-red-500/40 text-red-400 text-xs px-2 py-1 rounded-full font-medium">
              Booked
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-white font-bold text-lg leading-tight">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
        </div>
        {vehicle.trim && <p className="text-gray-500 text-xs mb-3">{vehicle.trim}</p>}

        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{vehicle.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.features.slice(0, 4).map((f) => (
            <span key={f} className="text-xs bg-navy-700 text-gray-400 px-2 py-0.5 rounded-full border border-white/6">
              {f}
            </span>
          ))}
          {vehicle.features.length > 4 && (
            <span className="text-xs text-gray-600">+{vehicle.features.length - 4} more</span>
          )}
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {vehicle.seats} seats
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-gold-500" />
            On Turo
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-white">
              ${vehicle.dailyRate}
              <span className="text-sm font-normal text-gray-500">/day</span>
            </div>
            {vehicle.weeklyRate && (
              <div className="text-xs text-gold-500">${vehicle.weeklyRate}/week — save ${(vehicle.dailyRate * 7 - vehicle.weeklyRate)}</div>
            )}
          </div>
        </div>

        {/* Action */}
        <a
          href={vehicle.turoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 font-bold text-sm py-2.5 rounded-xl transition-opacity hover:opacity-90"
          style={{background: '#e6a817', color: '#07090f'}}
        >
          <ExternalLink className="w-4 h-4" />
          Book on Turo
        </a>
      </div>
    </div>
  )
}
