import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface BookingRequest {
  id?: string
  vehicle_id: string
  vehicle_name: string
  customer_name: string
  customer_email: string
  customer_phone: string
  start_date: string
  end_date: string
  notes?: string
  status: 'pending' | 'confirmed' | 'declined'
  created_at?: string
}

export interface TuroBlock {
  vehicle_id: string
  start_date: string
  end_date: string
  source: 'turo' | 'private'
}

// Fetch all blocked date ranges for a vehicle (Turo + confirmed private bookings)
export async function getBlockedDates(vehicleId: string): Promise<{ start: string; end: string }[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return []

  const { data } = await supabase
    .from('blocked_dates')
    .select('start_date, end_date')
    .eq('vehicle_id', vehicleId)

  return (data ?? []).map((r) => ({ start: r.start_date, end: r.end_date }))
}

export async function submitBookingRequest(booking: Omit<BookingRequest, 'id' | 'created_at' | 'status'>): Promise<{ success: boolean; error?: string }> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    // Supabase not configured yet — just succeed silently
    return { success: true }
  }
  const { error } = await supabase
    .from('booking_requests')
    .insert({ ...booking, status: 'pending' })

  if (error) return { success: false, error: error.message }
  return { success: true }
}
