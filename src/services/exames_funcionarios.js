import { supabase } from './supabase';

export async function fetchExames() {
  const { data, error } = await supabase.from('dp_exames_funcionarios').select('*');
  if (error) throw error;
  return data;
}