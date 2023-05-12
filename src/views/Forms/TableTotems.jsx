import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TotemList = () => {
  const [totems, setTotems] = useState([]);

  useEffect(() => {
    const fetchTotems = async () => {
      try {
        const response = await axios.get("https://localhost:7264/api/Totems/");
        setTotems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotems();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Está seguro de que desea eliminar este totem?"
    );

    if (confirmDelete) {
      axios
        .delete(`https://localhost:7264/api/Totems/${id}`)
        .then((response) => {
          setTotems(totems.filter((totems) => totems.idTotem !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Totems</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">nombre</th>
            <th className="border px-4 py-2">numero plantilla</th>
            <th className="border px-4 py-2">ID de Usuario</th>
            <th className="border px-4 py-2">Imagen</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {totems.map((totems) => (
            <tr key={totems.id}>
              <td className="border px-4 py-2">{totems.idTotem}</td>
              <td className="border px-4 py-2">{totems.nombre}</td>
              <td className="border px-4 py-2">{totems.numeroPlantilla}</td>
              <td className="border px-4 py-2">{totems.idUsuario}</td>
              <td className="border px-4 py-2">
                <img
                  src={totems.urlLogo}
                  alt={totems.id}
                  className="h-16 w-16 object-contain"
                />
              </td>
              <td className="border px-4 py-2 flex justify-center items-center">
                <Link
                  to={`/EditTotem/${totems.idTotem}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Editar
                </Link>
                <Link
                  to={`/SeleccionPlantilla/${totems.idTotem}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                 Eleccion plantilla
                </Link>

                <button
                  onClick={() => handleDelete(totems.idTotem)}
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

export default TotemList;
