import "./styleCard.css";
import Advertising from "./Advertising";
import Modal from "./form_Advertising/FormAdd";
import React, { useState } from "react";
export function AdvertisingDisplay(props) {
  const [state, changeModalState] = useState(false);
  return (
    <>
      <Modal state={state} changeState={changeModalState}></Modal>
      <div class="background">
        <button class="addButton" onClick={() => changeModalState(!state)}>
          Nueva Publicidad
        </button>
        <div class="cardDisplay">
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
          <Advertising
            date="20/07/23"
            src="https://www.univalle.edu/wp-content/uploads/2023/02/in_01.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default AdvertisingDisplay;
