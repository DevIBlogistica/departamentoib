import { supabase } from './supabase';

export async function fetchSetores() {
  const { data, error } = await supabase.from('dp_setores').select('*');
  if (error) throw error;
  return data;
}