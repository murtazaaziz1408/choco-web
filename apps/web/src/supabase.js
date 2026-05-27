import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vyormnpvsiqiygynabji.supabase.co'

// Paste your complete, long publishable key (the sb_publishable one) inside these quotes:
const supabaseKey = 'sb_publishable_OFJOC8ioVZ-i0DsW1c0LNg_4JkxlA5x'

export const supabase = createClient(supabaseUrl, supabaseKey)