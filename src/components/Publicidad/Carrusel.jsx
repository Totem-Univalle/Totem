import { useEffect, useState } from "react";
import "/src/style/Carrusel.css";

function Carrusel({ images }) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(null);
    useEffect(()=>{
        setTimeout(() => {
            slideRight()

        }, 10000); 
     });
     const slideRight = () => {
        setCurrent(current == images.length - 1 ? 0: current + 1);
     }
  return (

    <div className="carrusel">
      <div className="carrusel_wrapper_publicidad">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? "carrusel_card_publicidad carrusel_card_active_publicidad"
                  : "carrusel_card_publicidad"
              }
            >
              <img className="card_image_publicidad" src={image.image} alt="" />
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default Carrusel;