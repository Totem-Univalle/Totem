import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

import { useSelector, useDispatch } from "react-redux";
import { addTotem, deleteTotem } from "../../components/redux/totemSlice";
import { deleteLocations } from "../../components/redux/locationSlice";
import { deletePublicidades } from "../../components/redux/publicidadSlice";

const PanelTotem = () => {
  const dispatch = useDispatch();
  dispatch(deleteTotem());
  dispatch(deleteLocations());
  dispatch(deletePublicidades());

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [totems, setTotems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https:/totemapi.azurewebsites.net/api/TotemU/${user.idUsuario}`
        );
        setTotems(response.data);
      } catch (error) {
        setError("Error al cargar los datos del usuario: " + error.message);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function chargeDataTotem(id) {
    fetch(`https:/totemapi.azurewebsites.net/api/Totems/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const totem = {
          idTotem: data.idTotem,
          nombre: data.nombre,
          numeroPlantilla: data.numeroPlantilla,
          urlLogo: data.urlLogo,
        };
        dispatch(addTotem(totem));
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        {user.loginMode === "admin" && (
          <button
            className="text-white text-xm font-bold rounded-lg bg-green-500 inline-block mt-4 mb-10 ml-10 mr-auto py-5 px-10 cursor-pointer"
            onClick={() => {
              navigate(`/TotemNew`);
            }}
          >
            Nuevo Totem
          </button>
        )}
        <div className="flex flex-col sm:flex-row justify-end gap-4">
          {totems.map(({ idTotem, urlLogo, nombre }) => (
            <a
              onClick={() => {
                if (user.loginMode === "admin") {
                  navigate(`/TotemEdit/:${idTotem}`);
                } else {
                  chargeDataTotem(idTotem);
                  navigate(`/Template`);
                }
              }}
            >
              <div className="card hover:bg-gray-200 shadow-2xl rounded-lg transition delay-300 duration-300 ease-in-out cursor-pointer p-4">
                <div className="flex flex-row justify-center">
                  <img className="w-40 image rounded-lg" src={urlLogo} />

                  <div className="mx-6 content px-5 flex flex-col justify-center">
                    <div className="text-xl">{user.institucion}</div>
                    <div className="text-md">{nombre}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default PanelTotem;