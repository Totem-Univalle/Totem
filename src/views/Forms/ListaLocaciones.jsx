import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function LocacionesTable() {
  const [locaciones, setLocaciones] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7264/api/Locaciones")
      .then((response) => response.json())
      .then((data) => setLocaciones(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://localhost:7264/api/Locaciones/${id}`).then((response) => {
      setLocaciones(
        locaciones.filter((locacion) => locacion.idLocacion !== id));
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Palabras clave</th>
          <th>ID del tótem</th>
          <th>Imagen del mapa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {locaciones.map((locacion) => (
          <tr key={locacion.idLocacion}>
            <td>{locacion.nombre}</td>
            <td>{locacion.descripcion}</td>
            <td>{locacion.keywords}</td>
            <td>{locacion.idTotem}</td>
            <td>
              {locacion.urlMapa &&
                <img src={locacion.urlMapa} alt={locacion.urlMapa} width="100" height="100" />
              }
            </td>
            <td>
              <Link
                to={`/EditLocaciones/${locacion.idLocacion}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(locacion.idLocacion)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LocacionesTable;