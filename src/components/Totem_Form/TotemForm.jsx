import { useState } from "react";
import "./TotemForm.css";

function AdminRegistrationForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [admin, setAdmin] = useState("");
  const [template, setTemplate] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    
  }
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
   <>
    <div className="pb-8">
    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
      Registrar Totem
    </p>
  </div>
    <form>
      <div>
        <div>
          <label className="text-gray-700 dark:text-gray-200" htmlFor="firstName">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div className="my-4">
        
          <div className="flex items-left justify-left">
            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-blue-300 group">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <p className="lowercase text-sm text-gray-400 group-hover:text-blue-600 pt-1 tracking-wider">
                  Seleccione un logo 
                </p>
              </div>
              <input
                className="hidden"
                type="file"
                id="image"
                name="image"
                accept="image/jpg, image/jpeg, image/png" 
                onChange={handleImageChange}
              />
            </label>
            <div>
            {image && (
              <div className="ml-4">
                <img
                  className="h-50 object-cover"
                  src={image}
                  alt="Previsualización de la imagen"
                />
              </div>
            )}
            </div>
          </div>
        </div>
        

        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Registrar
          </button>
        </div>
      </div>
    </form>
   </>
  );
}

export default AdminRegistrationForm;
