import React from "react";

import t1 from "../assets/totem2.jpg";


const PanelTotem = () => {
  const projects = [
    {
      id: 1,
      image: t1,
      title: "Univalle",
      estado: "Activo",
      ubicacion: "Tiquipaya",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      image: t1,
      title: "Tiquipaya",
      estado: "Activo",
      ubicacion: "Tiquipaya",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      image: t1,
      title: "Univalle",
      estado: "Activo",
      ubicacion: "Tiquipaya",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      image: t1,
      title: "Alcaldia",
      estado: "Activo",
      ubicacion: "Tiquipaya",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div>
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Centro de Instituciones
        </p>
      </div>
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 ">
        {projects.map(({ id, image, title, estado, ubicacion }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-600  duration-500 rounded-2xl overflow-hidden font-semibold"
          >
            <img src={image} alt={title} className="w-3/3" />
            <div className="w-2/3 flex flex-col items-left justify-evenly p-1">
              <button className="md:text-right text-white bg-gradient-to-b to-gray to-gray-500 mx-auto flex items-center rounded-md  duration-300">
                Compañia : {title}
              </button>
              <p className="text-lg font-semibold md:text-center ">
                Estado : {estado}
              </p>

              <p className="text-lg font-semibold md:text-center">
                Ubicacion : {ubicacion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PanelTotem;
