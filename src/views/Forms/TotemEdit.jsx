import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TotemEditForm = () => {
  const { id } = useParams();
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState(null);
  const [totems, setTotems] = useState({
    nombre: "",
    numeroPlantilla: 1,
    imagen: null,
    idUsuario: 1,
  });

  useEffect(() => {
    const fetchPublicidad = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7264/api/Totems/${id}`
        );
        setTotems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPublicidad();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTotems((prevState) => ({
      ...prevState,
      [name]: value,
      [event.target.name]: event.target.type === "file" ? event.target.files[0] : event.target.value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setTotems((prevState) => ({
        ...prevState,
        imagen: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nombre, numeroPlantilla, imagen, idUsuario } = totems;

    if (!nombre || !numeroPlantilla || !idUsuario) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    if (!imagen) {
      console.log("La urlImagen es obligatoria");
      return;
    }

    axios
      .put(`https://localhost:7264/api/Totems/${id}`, totems,{

       headers: { "Content-Type": "multipart/form-data" },
      
      })
      .then((response) => {
        console.log(response);
        setMensajeConfirmacion("El totem se ha modificado correctamente.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar TOtem</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 font-bold mb-2"
          >
            nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={totems.nombre || ""}
            onChange={handleChange}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numeroPlantilla"
            className="block text-gray-700 font-bold mb-2"
          >
            numero plntilla
          </label>
          <input
            type="number"
            id="numeroPlantilla"
            name="numeroPlantilla"
            value={totems.numeroPlantilla}
            onChange={handleChange}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imagen"
            className="block text-gray-700 font-bold mb-2"
          >
            urlImagen
          </label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            onChange={handleChange}
            className="border rounded py-2 px
-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="idUsuario"
            className="block text-gray-700 font-bold mb-2"
          >
            id Usuario
          </label>
          <input
          type="number"
            id="idUsuario"
            name="idUsuario"
            value={totems.idUsuario}
            onChange={handleChange}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar cambios
          </button>
          <br></br>
          <br></br>
          {mensajeConfirmacion && <p>{mensajeConfirmacion}</p>}
        </div>
      </form>
    </div>
  );
};
export default TotemEditForm;