import "./styleCard.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteLocations } from "../../components/redux/locationSlice";

export function Advertising(props) {
  const MySwal = withReactContent(Swal);

  let endDate = new Date(props.date)

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://totemapi.azurewebsites.net/api/Publicidad/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteLocations());
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div class="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl m-5">
      <div>
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
                handleDelete(props.idPublicidad);
              }
            })
          }
          className="text-white text-xs font-bold rounded-lg bg-red-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer"
        >
          Eliminar
        </button>
        <h1 className="text-2xs mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
          Fecha de Expiracion:
        </h1>
        <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
          {endDate.toLocaleDateString()}
        </p>
      </div>
      <div class="flex items-center justify-center max-h-96 overflow-hidden">
        <div class="aspect-w-1 aspect-h-1">
          <img className="object-contain" src={props.src} alt="" />
        </div>
      </div>
      <div className="flex p-4 justify-between"></div>
    </div>
  );
}

export default Advertising;
