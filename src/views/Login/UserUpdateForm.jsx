import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";

function UserUpdateForm() {
  const { idUsuario } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`https://localhost:7264/api/Usuarios/${idUsuario}`)
      .then((response) => {
        const user = response.data;

        setNombre(user.nombre);
        setApellido(user.apellido);
        setEmail(user.email);
      })
      .catch((error) => {
        setError("Error al cargar los datos del usuario.");
      });
  }, [idUsuario]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Verificar que la nueva contraseña coincida en ambos campos
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    const hashPass = CryptoJS.MD5(newPassword).toString(CryptoJS.enc.Hex);

    try {
      const response = await axios.put(
        `https://localhost:7264/api/Usuarios/${idUsuario}/update-user`,
        {
          nombre,
          apellido,
          email,
          pass: hashPass,
        }
      );

      if (response.status === 204) {
        console.log("Datos actualizados exitosamente");
      }
    } catch (error) {
      setError("Error al actualizar los datos del usuario.");
    }
  };

  return (
    <div className="container mx-auto">
      <div className=" p-4 mx-auto flex flex-col  ">
        <div className="mb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Actualizar Datos
          </p>
        </div>
      </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Apellido:
          </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contraseña antigua:
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Nueva contraseña:
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Confirmar nueva contraseña:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}

export default UserUpdateForm;
