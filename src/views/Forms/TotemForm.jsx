import React, { useState } from "react";
import "./TotemForm.css";
import axios from "axios";

function AdminRegistrationForm() {
  const [Nombre, setNombre] = useState("");
  const [NumeroPlantilla, setNumeroPlantilla] = useState(1);
  const [ImageFile, setImageFile] = useState(null);
  const [Usuario, setUsuario] = useState(1);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Nombre.trim() === "" ||
      NumeroPlantilla === "" ||
      Usuario === "" ||
      ImageFile === null
    ) {
      // Si algún campo está vacío, mostrar mensaje de error
      alert("Por favor, llene todos los campos antes de registrar.");
      return;
    }
    const formData = new FormData();
    formData.append("nombre", Nombre);
    formData.append("numeroPlantilla", NumeroPlantilla);
    formData.append("Imagen", ImageFile);
    formData.append("IdUsuario", Usuario);

    axios
      .post("https://localhost:7264/api/Totems", formData)
      .then((response) => {
        console.log(response);
        setMensajeConfirmacion("El totem se ha creado correctamente.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Registrar Totem
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label
              className="text-gray-700 dark:text-black-200"
              htmlFor="firstName"
            >
              Nombre
            </label>
            <input
              type="text"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label>NumeroPlantilla</label>
            <input
              type="number"
              value={NumeroPlantilla}
              onChange={(e) => setNumeroPlantilla(e.target.value)}
            />
          </div>
          <div>
            <label>Usuario id</label>
            <input
              type="number"
              value={Usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label>Imagen Logo</label>
            <div className="flex items-left justify-left">
              <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Registrar
            </button>
          </div>
          <br></br>
          {mensajeConfirmacion && <p>{mensajeConfirmacion}</p>}
        </div>
      </form>
    </>
  );
}

export default AdminRegistrationForm;
