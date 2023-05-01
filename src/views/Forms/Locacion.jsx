import React, { useState } from 'react';
import axios from 'axios';

function Locacion() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [keywords, setKeywords] = useState('');
  const [idTotem, setIdTotem] = useState('');
  const [imagenMapa, setImagenMapa] = useState(null);
  const [imagenesCarrucel, setImagenesCarrucel] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('keywords', keywords);
    formData.append('idTotem', idTotem);
    formData.append('imagenMapa', imagenMapa);
    formData.append('imagenesCarrucel', imagenesCarrucel);

    try {
      const response = await axios.post('https://localhost:7264/api/Locaciones', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <br />
      <label>
        Descripción:
        <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)}></textarea>
      </label>
      <br />
      <label>
        Palabras clave:
        <input type="text" value={keywords} onChange={(event) => setKeywords(event.target.value)} />
      </label>
      <br />
      <label>
        ID Totem:
        <input type="text" value={idTotem} onChange={(event) => setIdTotem(event.target.value)} />
      </label>
      <br />
      <label>
        Imagen de mapa:
        <input type="file" onChange={(event) => setImagenMapa(event.target.files[0])} />
      </label>
      <br />
      <label>
        Imágenes de carrusel:
        <input type="file" multiple onChange={(event) => setImagenesCarrucel(event.target.files)} />
      </label>
      <br />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Locacion;