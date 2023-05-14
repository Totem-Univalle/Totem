import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//import t1 from "../../assets/totem2.jpg";
import 'tailwindcss/tailwind.css';

export default function SelectTotem() {
  
    const [totems, setTotems] = useState([]);
    
    const userL = JSON.parse(localStorage.getItem("user"));
    console.log(userL.idUsuario);
    const loadTotems = () => {
      axios
        .get(`https://totemapi.azurewebsites.net/api/TotemU/${userL.idUsuario}`)
        .then((response) => {
            setTotems(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
        loadTotems();
    }, []);

  return (
    <div>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Totems
          </p>
        </div>
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 ">
          {totems.map(( totem) => (
            <div
              key={totem.idTotem}
              className="max-w-lg flex shadow-lg shadow-gray-600  duration-500 rounded-2xl overflow-hidden font-semibold"
            >
              <img src={totem.urlLogo} alt={userL.institucion} className="w-3/3 object-fill " />
              <div className="w-2/3 flex flex-col items-left justify-evenly p-1">
              <p className="text-lg font-semibold md:text-center ">
                  Nombre : {totem.nombre}
                </p>
                <button className="md:text-right text-white bg-gradient-to-b to-gray to-gray-500 mx-auto flex items-center rounded-md  duration-300">
                  Compañia : {userL.institucion}
                </button>
                <p className="text-lg font-semibold md:text-center ">
                  Estado : Activo
                </p>
                

                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

