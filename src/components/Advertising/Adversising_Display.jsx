import "./styleCard.css";
import Advertising from "./Advertising";
export function AdvertisingDisplay(props) {
  return (
    <div class="background">
      <button class="addButton">Nueva Publicidad</button>
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
  );
}

export default AdvertisingDisplay;
