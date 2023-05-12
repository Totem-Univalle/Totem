import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7264/api/Usuarios/"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7264/api/Usuarios/${id}`)
      .then((response) => {
        setTotems(
          users.filter((users) => users.idUsuario !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">users</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">nombre</th>
            <th className="border px-4 py-2">apellido</th>
            <th className="border px-4 py-2">email</th>
            <th className="border px-4 py-2">pass</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td className="border px-4 py-2">{users.idUsuario}</td>
              <td className="border px-4 py-2">{users.nombre}</td>
              <td className="border px-4 py-2">{users.apellido}</td>
              <td className="border px-4 py-2">{users.email}</td>
              <td className="border px-4 py-2">{users.pass}</td>
             
              <td className="border px-4 py-2 flex justify-center items-center">
                <Link
                  to={`/EditUser/${users.idUsuario}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Editar
                </Link>
               
                <button
                  onClick={() => handleDelete(totems.users)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;