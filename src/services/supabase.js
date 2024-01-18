
import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = "https://esfjoqxfprrercynnmjf.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzZmpvcXhmcHJyZXJjeW5ubWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTM3NTIsImV4cCI6MjAyMDUyOTc1Mn0.WZmY6YlT7LU6jUDdD7QBRJfWpDVCXACzOEoFrHcR26Q"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;