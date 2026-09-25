import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqbwvprkghiojlqrhzdf.supabase.co'; // Ganti dengan URL Supabase Anda
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxYnd2cHJrZ2hpb2pscXJoemRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzMTY5OTAsImV4cCI6MjEwNDg5Mjk5MH0.Kz8h8ZsJh1eH0XSb6ZSyqZgX2b3nMu6HI5wSQJKDO7U'; // Ganti dengan Anon Key Supabase Anda

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
