import styles from "./Card.module.css";
import Carrusel from "./Carrusel";
import { pics } from "./Data";
import "../style/card.scss";

export function Card() {
  return (
    <div className={styles.panel}>
      <img className={styles.logo} src="/images/logo.png"></img>
      <div className={styles.title} align="center">
        <strong>
        Plaza principal de Tiquipaya
        </strong>
      </div>
      <div className={styles.weather_wrapper}></div>

      <div align="center">
        <input type="text" placeholder="Buscar..." className={styles.search} />
      </div>
      <table >
        <tr>
          <td rowspan="4" align="center">
            <div className={styles.map_wrapper}>
              <img className={styles.map} src="/images/map.png"></img>
            </div>
          </td>
          <td>
          <div height="50px" className={styles.date}>
              <img
                className={styles.weather}
                src="/images/schedule.png"
              ></img>
              20 Marzo 2023
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles.date}>
              <img
                className={styles.weather}
                src="/images/weather-app.png"
              ></img>
              21 °C
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Carrusel className="carrusel" images={pics} />
          </td>
        </tr>
        <tr>
          <td>

            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </td>
        </tr>
      </table>

    </div>
  );
}
