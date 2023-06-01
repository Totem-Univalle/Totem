import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { useSelector } from "react-redux";

function TotemAdvertising() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [publicidades, setPublicidades] = useState([]);
  const totem = useSelector((state) => state.totem);

  const loadPublicidades = () => {
    axios
      .get(`https://totemapi.azurewebsites.net/api/PublicidadT/${totem.idTotem}`)
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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % publicidades.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [publicidades.length]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Carousel
        className=""
        showThumbs={false}
        showStatus={false}
        showArrows={false} // Oculta los botones de navegación
        showIndicators={false}
        infiniteLoop={true}
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        autoPlay={false}
        interval={5000}
      >
        {publicidades.map((publicidad, index) => (
          <div key={index}>
            <img
              src={publicidad.urlPublicidad}
              alt="Publicidad"
              className="h-screen"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TotemAdvertising;