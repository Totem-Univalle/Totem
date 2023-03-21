import styles from "./Card.module.css";
import Carrusel from "./Carrusel";
import { pics } from "./Data";

export function Card() {
  return (
    <div className={styles.panel}>
      <div className={styles.topBar}>
        <table>
          <tr>
            <td align="left">
              <img className={styles.logo} src="/images/logo.png"></img>
            </td>
            <td align="center">
              <div className={styles.title} align="center">
                <strong>Plaza principal de Tiquipaya</strong>
              </div>
            </td>
            <td className={styles.image_wrapper}>
              <img
                className={styles.image}
                src="https://firebasestorage.googleapis.com/v0/b/totem-univalle-sp.appspot.com/o/People.png?alt=media&token=768cb901-9b12-4fda-95f4-17f4c7394eb4"
              ></img>
            </td>
          </tr>
        </table>
      </div>
      <div align="center">
        <input type="text" placeholder="Buscar..." className={styles.search} />
      </div>
      <div className={styles.middleBar}>
        <table>
          <tr>
            <td rowspan="4" align="center">
              {/* <div className={styles.map_wrapper}>
                <img className={styles.map} src="/images/map.png"></img>
              </div> */}
                <div class="card">
                <div class="img-avatar2">
                  <div>
                  
                  <h3> <img className={styles.info} src="/images/location.png"></img> ¿Como llegar?</h3>
                  </div>
                  
                </div>
                <div class="card-text">
                  <div class="title-total">
                    

                    <div class="desc">
                    <img className={styles.map} src="/images/map.png"></img>
                    </div>
                  </div>
                </div>
              </div>

              {/* kjsdklf */}
            </td>
            <td>
              <div height="50px" className={styles.date2}>
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
              {/* <div className={styles.date}>
                <img
                  className={styles.weather}
                  src="/images/weather-app.png"
                ></img>
                21 °C
              </div> */}

              {/* o */}
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <div class="card">
                <div class="img-avatar">
                  <img className={styles.info} src="/images/info.png"></img>
                </div>
                <div class="card-text">
                  <div class="title-total">
                    <h2>Morgan Sweeney</h2>

                    <div class="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </div>
                  </div>
                </div>
              </div>

              
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td colspan="2" align="center">
              <td align="center">
                <Carrusel className="carrusel" images={pics} />
              </td>
            </td>
          </tr>
        </table>
      </div>

      
    </div>
  );
}
