import { createClient } from '@supabase/supabase-js'
import { Database } from './db-types'

// These should be environment variables in a real application
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type for the subscribers table
export type Subscriber = {
  id: string
  email: string
  created_at: string
  status: 'active' | 'unsubscribed'
}