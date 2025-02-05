import { supabase } from './supabase';

export async function fetchExames() {
  const { data, error } = await supabase.from('dp_exames').select('*');
  if (error) throw error;
  return data;
}