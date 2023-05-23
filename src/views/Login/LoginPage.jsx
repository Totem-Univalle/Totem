import { LockClosedIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

//Redux

import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../components/redux/userSlice";
import { deleteTotem } from "../../components/redux/totemSlice";
import { deleteLocations } from "../../components/redux/locationSlice";
import { deletePublicidades } from "../../components/redux/publicidadSlice";
//

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(deleteTotem());
  dispatch(deleteLocations());
  dispatch(deletePublicidades());

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    formData.password = CryptoJS.MD5(formData.password).toString(
      CryptoJS.enc.Hex
    );
  };

  const handleSubmit = async (event, submitType) => {
    var user = null;
    event.preventDefault();
    formData.password = CryptoJS.MD5(formData.password).toString(
      CryptoJS.enc.Hex
    );
    //console.log(formData);
    if (submitType === "admin") {
      try {
        fetch("https:/totemapi.azurewebsites.net/api/Usuarios/Authenticate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            user = {
              idUsuario: data.user.idUsuario,
              institucion: data.user.institucion,
              rol: data.user.rol,
              token: data.token,
              nombre: data.user.nombre,
              apellido: data.user.apellido,
              email: data.user.email,
              loginMode: "admin"
            };
            dispatch(addUser(user));
            navigate('/Panel');
          })
          .catch((error) => console.error(error));

      } catch (error) {
        console.error(error);
      }
    } else if (submitType === "totem") {
      try {
        fetch("https://totemapi.azurewebsites.net/api/Usuarios/LoginTotem", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            user = {
              idUsuario: data.user.idUsuario,
              institucion: data.user.institucion,
              rol: data.user.rol,
              token: data.token,
              nombre: data.user.nombre,
              apellido: data.user.apellido,
              email: data.user.email,
              loginMode: "totem"
            };
            dispatch(addUser(user));
            navigate('/Panel');
          })
          .catch((error) => console.error(error));

      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Correo Electronico"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  to="/ForgotPassword"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(event) => handleSubmit(event, "admin")}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Iniciar Sesión Como Administrador
              </button>
              <br />
              <button
                type="submit"
                onClick={(event) => handleSubmit(event, "totem")}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Iniciar Sesión Como Totem
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
