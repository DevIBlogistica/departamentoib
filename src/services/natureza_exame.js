import { supabase } from './supabase';

export async function fetchExames() {
  const { data, error } = await supabase.from('dp_natureza_exame').select('*');
  if (error) throw error;
  return data;
}