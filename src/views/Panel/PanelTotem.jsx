import React, { useEffect, useState } from "react";
import axios from "axios";

import t1 from "../../assets/totem2.jpg";
import "tailwindcss/tailwind.css";

const PanelTotem = () => {
  localStorage.setItem("totem", null);
  const userL = JSON.parse(localStorage.getItem("user"));

  const [totems, setTotems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https:/totemapi.azurewebsites.net/api/TotemU/${userL.idUsuario}`
        );
        setTotems(response.data);
      } catch (error) {
        setError("Error al cargar los datos del usuario: " + error.message);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-end gap-4">
          {totems.map(({ idTotem, urlLogo, nombre }) => (
            <a href={`TotemEdit/:${idTotem}`} onClick={() => localStorage.setItem("totem", JSON.stringify({ idTotem, urlLogo }))}>
              <div className="card hover:bg-gray-200 shadow-2xl rounded-lg transition delay-300 duration-300 ease-in-out cursor-pointer p-4">
                <div className="flex flex-row justify-center">
                  <img className="w-40 image rounded-lg" src={urlLogo} />

                  <div className="mx-6 content px-5 flex flex-col justify-center">
                    <div className="text-xl">{userL.institucion}</div>
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
