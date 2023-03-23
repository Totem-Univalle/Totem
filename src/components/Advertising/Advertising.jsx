import './styleCard.css'
export function Advertising(props) {
  return <div class="card">
      <div class="expDate">
          <div class="expText">
              <div>Vcto: {props.date}</div>
          </div>
      </div>
      <div class="imagePart">
          <img class="imgAdd" src={props.src} alt=""/>
      </div>
      <button class="deleteButton" onclick="">
          X
      </button>
  </div>;
}

export default Advertising
