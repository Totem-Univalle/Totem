import React from "react";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p4.jpg";
import p4 from "../../assets/p3.png";

const SeleccionPlantilla = () => {
  const port = [
    {
      id: 1,
      src: p4,
    },
    {
      id: 2,
      src: p2,
    },
    {
      id: 3,
      src: p3,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Plantillas
          </p>
          <p className="py-6">Seleccione la plantilla de su preferencia</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {port.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Ver mas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeleccionPlantilla;
