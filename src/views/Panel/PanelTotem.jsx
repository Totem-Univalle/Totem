import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";

import { useSelector, useDispatch } from "react-redux";
import { addTotem, deleteTotem } from "../../components/redux/totemSlice";
import { deleteLocations } from "../../components/redux/locationSlice";
import { deletePublicidades } from "../../components/redux/publicidadSlice";

const PanelTotem = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const MySwal = withReactContent(Swal);
  dispatch(deleteTotem());
  dispatch(deleteLocations());
  dispatch(deletePublicidades());

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [totems, setTotems] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://totemapi.azurewebsites.net/api/Totems/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteTotem());
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https:/totemapi.azurewebsites.net/api/TotemU/${user.idUsuario}`
        );
        setTotems(response.data);
      } catch (error) {
        setError("Error al cargar los datos del usuario: " + error.message);
        console.log(error);
      }
    };
    fetchData();
  }, [location]);

  function chargeDataTotem(id) {
    fetch(`https:/totemapi.azurewebsites.net/api/Totems/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const totem = {
          idTotem: data.idTotem,
          nombre: data.nombre,
          numeroPlantilla: data.numeroPlantilla,
          urlLogo: data.urlLogo,
        };
        dispatch(addTotem(totem));
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        {user.loginMode === "admin" && (
          <button
            className="text-white text-xm font-bold rounded-lg bg-green-500 inline-block mt-4 mb-10 ml-10 mr-auto py-5 px-10 cursor-pointer"
            onClick={() => {
              navigate(`/TotemNew`);
            }}
          >
            Nuevo Totem
          </button>
        )}
        <div className="flex flex-col sm:flex-row justify-end gap-4">
          {totems.map(({ idTotem, urlLogo, nombre }) => (
            <div>
              {user.loginMode === "admin" && (
                <button
                  onClick={() =>
                    MySwal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleDelete(idTotem);
                      }
                    })
                  }
                  className="text-white text-xs font-bold rounded-t-lg bg-red-500 inline-block mt--4 ml-80 py-3 px-7 cursor-pointer"
                >
                  Eliminar
                </button>
              )}
              <a
                onClick={() => {
                  if (user.loginMode === "admin") {
                    navigate(`/TotemEdit/:${idTotem}`);
                  } else {
                    chargeDataTotem(idTotem);
                    navigate(`/Template`);
                  }
                }}
              >
                <div className="card hover:bg-gray-200 shadow-2xl rounded-lg transition delay-300 duration-300 ease-in-out cursor-pointer p-4">
                  <div className="flex flex-row justify-center">
                    <img className="w-40 image rounded-lg" src={urlLogo} />

                    <div className="mx-6 content px-5 flex flex-col justify-center">
                      <div className="text-xl">{user.institucion}</div>
                      <div className="text-md">{nombre}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PanelTotem;
