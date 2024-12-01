import { supabase } from './supabaseClient';


export const getRiveFiles = async () => {
  const { data, error } = await supabase.from('animations').select('*');

  if (error) {
    console.error('Error al obtener las animaciones:', error.message);
    return [];
  }

  console.log('data:', data);
  return data; 
};