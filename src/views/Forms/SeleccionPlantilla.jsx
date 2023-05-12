import React, { useState } from "react";
import { useParams } from "react-router-dom";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.jpg";

const SeleccionPlantilla = () => {
  const { idTotem } = useParams();
  const [selectedPlantilla, setSelectedPlantilla] = useState(0);

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

  const handleSelectPlantilla = (plantillaId) => {
    setSelectedPlantilla(plantillaId);
    fetch(`https://localhost:7264/api/Totems/${idTotem}/numero-plantilla`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantillaId),
    })
      .then((response) => {
        if (response.ok) {
          console.log("El número de plantilla se ha actualizado correctamente");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div name="portfolio" className="">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Plantillas
          </p>
          <p className="py-6">Seleccione la plantilla de su preferencia</p>
        </div>
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
              <button
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => handleSelectPlantilla(id)}
              >
                Elegir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeleccionPlantilla;
