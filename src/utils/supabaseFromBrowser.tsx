//import React, { useState } from 'react';
//import { uploadRiveFile } from './supabaseStorage';
//
//const UploadRiveFiles = () => {
//  const [file, setFile] = useState<File | null>(null);
//
//  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//    if (event.target.files && event.target.files[0]) {
//      setFile(event.target.files[0]);
//    }
//  };
//
//  const handleUpload = async () => {
//    if (!file) {
//      alert('Por favor selecciona un archivo');
//      return;
//    }
//
//    try {
//      const data = await uploadRiveFile(file, file.name);
//      console.log('Archivo subido con éxito:', data);
//    } catch (error) {
//      console.error('Error al subir archivo:', error);
//    }
//  };
//
//  return (
//    <div>
//      <input type="file" accept=".riv" onChange={handleFileChange} />
//      <button onClick={handleUpload}>Subir Archivo</button>
//    </div>
//  );
//};
//
//export default UploadRiveFiles;
