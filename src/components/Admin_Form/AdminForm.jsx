import { useState } from "react";
import "./AdminForm.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CryptoJS from 'crypto-js';
import emailjs from '@emailjs/browser';
//npm install crypto-js
//npm install --save sweetalert2 sweetalert2-react-content
//npm install @emailjs/browser --save

function AdminRegistrationForm() {
  const MySwal = withReactContent(Swal)

  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    rol: 1,
    email: '',
    institucion: '',
  });
  const sendData = async (event) => {
    event.preventDefault();

    // Generar contraseña aleatoria
    const pass = Math.random().toString(36).substring(7);
    const hashPass = CryptoJS.MD5(pass).toString(CryptoJS.enc.Hex);


    // Crear objeto de usuario con la contraseña generada
    const nuevoUsuario = {
      ...usuario,
      pass: hashPass,
    };

    try {
      // Enviar solicitud POST a la API
      const response = await fetch('https://localhost:7264/api/Usuarios', {
        method: 'POST',
        body: JSON.stringify(nuevoUsuario),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      

      // Manejar respuesta de la API
      const data = await response.json();
      console.log(data);
      console.log(pass);
      console.log(CryptoJS.MD5(pass).toString(CryptoJS.enc.Hex));


      var templateParams = {
        from_name: "Totem",
        user_name: usuario.nombre,
        message: pass,
        user_email: usuario.email,
    };

      emailjs.send("service_3rtigfq","template_qsoq91x", templateParams, "k1svNk93T8_CwWCl2").then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setUsuario({
        nombre: '',
        apellido: '',
        email: '',
        contraseña: '',
        rol: 1,
        institucion: '',
      });
      

      MySwal.fire({
        
        icon: 'success',
        title: 'Usuario registrado exitosamente',
        showConfirmButton: false,
        timer: 2000,
      
      })

    } catch (error) {
      console.error(error);
    }
  };

  const manejarCambios = (event) => {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value
    });
  };


  return (
    <form onSubmit={sendData}>
      <div>
        <div>
          <label className="text-gray-700 dark:text-gray-200" htmlFor="firstName">
            Nombres
          </label>
          <input
          required
            type="text"
            value={usuario.nombre}
            name="nombre"
            onChange={manejarCambios}
            id="firstName"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="text-gray-700 dark:text-gray-200" htmlFor="lastName">
            Apellidos
          </label>
          <input
          required
            type="text"
            value={usuario.apellido} 
            name="apellido"
            onChange={manejarCambios}
            id="lastName"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          required
            type="email"
            value={usuario.email} 
            name="email"
            onChange={manejarCambios}
            id="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
       
        <div>
          <label htmlFor="email">Institución:</label>
          <input
          required
            type="text"
            value={usuario.institucion} 
            name="institucion"
            onChange={manejarCambios}
            id="institucion"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
       
        <div className="flex justify-end mt-6">
          <button 
          type="submit"
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" >
            Registrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default AdminRegistrationForm;
