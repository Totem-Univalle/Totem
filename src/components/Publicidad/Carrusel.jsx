import { useEffect, useState } from "react";
import "/src/style/Carrusel.css";
import axios from "axios";

function Carrusel() {
  const [publicidades, setPublicidades] = useState([]);
  const [current, setCurrent] = useState(0);

  const loadPublicidades = () => {
    axios
      .get(`https://localhost:7264/api/PublicidadT/24`)
      .then((response) => {
        setPublicidades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadPublicidades();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRight();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [current]);

  const slideRight = () => {
    setCurrent(current === publicidades.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="carrusel">
      <div className="carrusel_wrapper_publicidad">
        {publicidades.map((publicidad, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carrusel_card_publicidad carrusel_card_active_publicidad"
                : "carrusel_card_publicidad"
            }
          >
            <img
              className="card_image_publicidad"
              src={publicidad.urlPublicidad}
              alt=""
            />
          </div>
        ))}
        {console.log(publicidades)}
      </div>
    </div>
  );
}

export default Carrusel;