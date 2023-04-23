import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminTable.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AdminTable = () => {
  const [usuarios, setUsuarios] = useState([]);
  
   useEffect(() => {
    axios
      .get("https://localhost:7264/api/Usuarios")
      .then((response) => {
        setUsuarios(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const eliminarUsuario = (id) => {
    MySwal.fire({
      title: "¿Estas segur@ de eliminar a este usuario?",
      text: "No podras revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        //----------------------------------------------------------------
        fetch(`https://localhost:7264/api/Usuarios/${id}`, {
          method: "DELETE",
          body: JSON.stringify(id),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar el usuario");
            }
            // Aquí puedes actualizar la lista de usuarios
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        //----------------------------------------------------------------
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="flex items-center">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-gray-300 border-separate space-y-6 text-sm">
            <thead align="center" className="bg-gray-900 text-gray-500  ">
              <tr>
                <th className="p-3 text-center">Nombres</th>
                <th className="p-3 text-center">Apellidos</th>
                <th className="p-3 text-center">Email</th>
                <th className="p-3 text-center">Institución</th>
                <th className="p-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.idUsuario} className="bg-gray-800">
                  <td className="p-3">
                    <div className="flex align-items-center">
                      <img
                        className="rounded-full h-12 w-12  object-cover"
                        src="https://e7.pngegg.com/pngimages/323/705/png-clipart-user-profile-get-em-cardiovascular-disease-zingah-avatar-miscellaneous-white.png"
                        alt="unsplash image"
                      />

                      <div className="ml-3">{usuario.nombre}</div>
                    </div>
                  </td>
                  <td className="p-3">{usuario.apellido}</td>
                  <td className="p-3 font-bold">{usuario.email}</td>
                  <td className="p-3 font-bold">
                    <span className="bg-blue-500 text-gray-50 rounded-md px-2">
                      {usuario.institucion}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <button
                      className="text-gray-400 hover:text-gray-100 mr-2"
                      onClick={() => eliminarUsuario(usuario.idUsuario)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
