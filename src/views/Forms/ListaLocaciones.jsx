import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLocations } from "../../components/redux/locationSlice";

function LocacionesTable() {
  const dispatch = useDispatch();
  const stateLocations = useSelector((state) => state.locations);

  const [locaciones, setLocaciones] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (stateLocations.locaciones === null) {
      fetch("https://totemapi.azurewebsites.net/api/Locaciones")
        .then((response) => response.json())
        .then((data) => {
          const locationf = data.filter(
            (locacion) => locacion.idTotem == id.slice(1)
          );
          dispatch(addLocations(locationf));
          setLocaciones(locationf);
        })
        .catch((error) => console.log(error));
    } else {
      setLocaciones(stateLocations.locaciones);
    }
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://totemapi.azurewebsites.net/api/Locaciones/${id}`)
      .then((response) => {
        setLocaciones(
          locaciones.filter((locacion) => locacion.idLocacion !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Nombre</th>
          <th className="py-3 px-6 text-left">Descripcion</th>
          <th className="py-3 px-6 text-center">Palabras clave</th>
          <th className="py-3 px-6 text-center">Mapa</th>
          <th className="py-3 px-6 text-center">Fotos del Lugar</th>
          <th className="py-3 px-6 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {locaciones.map((locacion) => (
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-1 text-left whitespace-nowrap w-200">
              <div className="flex items-center">
                <span className="font-medium overflow-ellipsis">
                  {locacion.nombre}
                </span>
              </div>
            </td>

            <td className="py-3 px-6 text-center w-auto">
              <div className="flex items-center justify-center">
                <span
                  className="font-medium"
                  style={{ maxWidth: "300px", overflowWrap: "break-word" }}
                >
                  {locacion.descripcion}
                </span>
              </div>
            </td>

            <td className="py-3 px-6 text-center">
              {locacion.keywords.split(",").map((item, index) => (
                <span
                  key={index}
                  className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"
                  style={{ display: "block", margin: "5px" }}
                >
                  {item}
                </span>
              ))}
            </td>

            <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-center">
                <img
                  className="w-24 h-24 rounded-full cursor-pointer"
                  src={locacion.urlMapa}
                  alt="Client"
                  onClick={() => window.open(locacion.urlMapa, "_blank")}
                />
              </div>
            </td>

            <td class="py-3 px-6 text-center">
              <div class="flex items-center justify-center">
                {locacion.urlCarruselImagenes.split(",").map((item, index) => (
                  <img
                    class="w-24 h-24 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                    src={item}
                    onClick={() => window.open(item, "_blank")}
                  />
                ))}
              </div>
            </td>

            <td className="py-3 px-6 text-center">
              <div className="flex item-center justify-center">
                <div className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <Link
                  to={`/EditLocacion/${locacion.idLocacion}`}
                  className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </Link>
                <button
                  onClick={() => handleDelete(locacion.idLocacion)}
                  className="w-5 mr-2 transform hover:text-purple-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LocacionesTable;
