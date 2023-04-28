import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PublicidadEditForm = () => {
  const { id } = useParams();
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState(null);
  const [publicidad, setPublicidad] = useState({
    fechaInicio: "",
    fechaFin: "",
    imagen: null,
    idTotem: 0,
  });

  useEffect(() => {
    const fetchPublicidad = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7264/api/Publicidad/${id}`
        );
        setPublicidad(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPublicidad();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPublicidad((prevState) => ({
      ...prevState,
      [name]: value,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setPublicidad((prevState) => ({
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

    const { fechaInicio, fechaFin, imagen, idTotem } = publicidad;

    if (!fechaInicio || !fechaFin || !idTotem) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    if (!imagen) {
      console.log("La urlImagen es obligatoria");
      return;
    }

    axios
      .put(`https://localhost:7264/api/Publicidad/${id}`, publicidad, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        setMensajeConfirmacion("La publicidad se ha modificado correctamente.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Publicidad</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fechaInicio"
            className="block text-gray-700 font-bold mb-2"
          >
            Fecha de inicio
          </label>
          <input
            type="date"
            id="fechaInicio"
            name="fechaInicio"
            value={publicidad.fechaInicio || ""}
            onChange={handleChange}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fechaFin"
            className="block text-gray-700 font-bold mb-2"
          >
            Fecha de fin
          </label>
          <input
            type="date"
            id="fechaFin"
            name="fechaFin"
            value={publicidad.fechaFin || ""}
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
            htmlFor="idTotem"
            className="block text-gray-700 font-bold mb-2"
          >
            Id Totem
          </label>
          <input
            type="number"
            id="idTotem"
            name="idTotem"
            value={publicidad.idTotem}
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
          {mensajeConfirmacion && <p>{mensajeConfirmacion}</p>}
        </div>
      </form>
    </div>
  );
};
export default PublicidadEditForm;
