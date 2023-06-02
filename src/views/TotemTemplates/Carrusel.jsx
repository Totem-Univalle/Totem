
import { useEffect, useState } from "react";
import "./Carrusel.css";


function Carrusel({ images }) {
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
    <div className="carrusel">
      <div className="carrusel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? "carrusel_card carrusel_card_active"
                  : "carrusel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default Carrusel;
