import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PublicidadList = () => {
  const [publicidades, setPublicidades] = useState([]);

  useEffect(() => {
    const fetchPublicidades = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7264/api/Publicidad/"
        );
        setPublicidades(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPublicidades();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7264/api/Publicidad/${id}`)
      .then((response) => {
        setPublicidades(
          publicidades.filter((publicidad) => publicidad.idPublicidad !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Publicidades</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Fecha de inicio</th>
            <th className="border px-4 py-2">Fecha de fin</th>
            <th className="border px-4 py-2">ID de totem</th>
            <th className="border px-4 py-2">Imagen</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {publicidades.map((publicidad) => (
            <tr key={publicidad.id}>
              <td className="border px-4 py-2">{publicidad.idPublicidad}</td>
              <td className="border px-4 py-2">{publicidad.fechaInicio}</td>
              <td className="border px-4 py-2">{publicidad.fechaFin}</td>
              <td className="border px-4 py-2">{publicidad.idTotem}</td>
              <td className="border px-4 py-2">
                <img
                  src={publicidad.urlPublicidad}
                  alt={publicidad.id}
                  className="h-16 w-16 object-contain"
                />
              </td>
              <td className="border px-4 py-2 flex justify-center items-center">
                <Link
                  to={`/EditPublicidad/${publicidad.idPublicidad}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Editar
                </Link>
               
               
                <button
                  onClick={() => handleDelete(publicidad.idPublicidad)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicidadList;
