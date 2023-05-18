import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Locacion() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [keywords, setKeywords] = useState("");
  const [idTotem, setIdTotem] = useState("");
  const [imagenMapa, setImagenMapa] = useState(null);
  const [imagenesCarrucel, setImagenesCarrucel] = useState(null);

  const { id } = useParams();
  console.log(id);
  const totem = localStorage.getItem("totem");

  const [locacion, setLocacion] = useState({
    nombre: "",
    descripcion: "",
    keywords: "",
    idTotem: "",
    imagenMapa: null,
    imagenesCarrucel: null,
  });

  useEffect(() => {
    const fetchPublicidad = async () => {
      try {
        const response = await axios.get(
          `https://totemapi.azurewebsites.net/api/Locaciones/${id}`
        );
        setLocacion(response.data);
        console.log(locacion);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPublicidad();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLocacion((prevState) => ({
      ...prevState,
      [name]: value,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*     const formData = new FormData();
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
    }*/
  };

  return (
    <form onSubmit={handleSubmit}>
      <a
        href={`/ListaLocaciones/:${totem}`}
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Lista Locaciones
      </a>
      <label>
        Nombre:
        <input type="text" value={locacion.nombre} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="descripcion" className="block mb-2">
        Descripción:
        <textarea
          id="descripcion"
          name="descripcion"
          value={locacion.descripcion}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
        ></textarea>
      </label>

      <br />
      <label>
        Palabras clave:
        <input type="text" value={locacion.keywords} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="imagenMapa" className="block mb-2">
        Imagen de mapa:
        <input
          type="file"
          id="imagenMapa"
          name="imagenMapa"
          onChange={handleChange}
          accept="image/*"
          className="border border-gray-300 rounded-lg p-2"
        />
      </label>

      <br />
      <label>
        Imágenes de carrusel:
        <input type="file" multiple onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Guardar</button>
      <br></br>
    </form>
  );
}

export default Locacion;
