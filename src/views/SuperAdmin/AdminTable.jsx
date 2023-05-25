import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminTable.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AdminTable = () => {
  const [usuarios, setUsuarios] = useState([]);
  const MySwal = withReactContent(Swal);

  const loadUsuarios = () => {
    axios
      .get("https://totemapi.azurewebsites.net/api/Usuarios")
      .then((response) => {
        setUsuarios(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadUsuarios();
  }, []);
  const actualizarUsuarios = (id) => {
    setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
  };

  const eliminarUsuario = (id) => {
    MySwal.fire({
      title: "¿Estas segur@ de eliminar a este usuario?",
      text: "Los Totems que pertenecen a este usuario tambien se eliminaran. No podras revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        //----------------------------------------------------------------
        try {
          fetch(`https://totemapi.azurewebsites.net/api/Usuarios/${id}`, {
            method: "DELETE",
            //body: JSON.stringify(id),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error al eliminar el usuario");
              }
              // Aquí puedes actualizar la lista de usuarios
              loadUsuarios();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          //----------------------------------------------------------------
          MySwal.fire({
            icon: "success",
            title: "Usuario eliminado exitosamente.",

            timer: 2000,
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  return (
    <>
      
    </>
  );
};

export default AdminTable;
