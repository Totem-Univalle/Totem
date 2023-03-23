
import { useEffect, useState } from "react";
import "../styleT2/CarruselT2.css";
import "../styleT2/cardT2.scss";

function CarruselT2({ images }) {
    const [current, setCurrent] = useState(0);
    
    useEffect(()=>{
        setTimeout(() => {
            slideRight()

        }, 4000); 
     });
     const slideRight = () => {
        setCurrent(current == images.length - 1 ? 0: current + 1);
     }
  return (
    <div className="carruselT2">
      <div className="carrusel_wrapperT2">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? "carrusel_card carrusel_card_activeT2"
                  : "carrusel_cardT2"
              }
            >
              <img className="card_imageT2" src={image.image} alt="" />
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default CarruselT2;
