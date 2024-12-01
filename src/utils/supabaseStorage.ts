import { supabase } from './supabaseClient';

// Función para subir un archivo a Supabase Storage
export const uploadRiveFile = async (filePath: string, fileName: string) => {
  const file = new File([filePath], fileName); // Genera el archivo desde el path local

  const { data, error } = await supabase.storage
    .from('animations') // Nombre del bucket
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true, // Sobrescribe si el archivo ya existe
    });

  if (error) {
    console.error('Error al subir el archivo:', error.message);
    throw new Error('Error al subir el archivo');
  }

  console.log('Archivo subido correctamente:', data);
  return data; // Devuelve la información del archivo subido
};
