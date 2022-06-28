import { createClient } from '@supabase/supabase-js'

if (!window.env.SUPABASE_URL) throw new Error('SUPABASE_URL is required');

if (!window.env.SUPABASE_ANON_KEY) throw new Error('PUBLIC_SUPABASE_ANON_KEY is required');

if (!window.env.SERVER_URL) throw new Error('SERVER_URL is required');

export const supabaseClient = createClient(window.env.SUPABASE_URL, window.env.SUPABASE_ANON_KEY);
