import styles from "./Card.module.css";
import Carrusel from "./Carrusel";
import { pics } from "./Data";
import gif from "/images/animation.gif";
import gifMic from "/images/mic7.gif";

export function Card() {
  return (
    <div className={styles.panel}>
      <div className={styles.topBar}>
        <table  >
          <tbody>
            <tr >
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
          </tbody>
        </table>
      </div>
      <table className="search_wrapper">
        <tbody>
          <tr>
            <td>
              <div className={styles.mic}>
                <img className={styles.mic_icon} src={gifMic}></img>
              </div>
            </td>
            <td>
              <input
                type="text"
                placeholder="Buscar..."
                className={styles.search}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.middleBar}>
        <table >
          <tbody>
            <tr>
              <td rowSpan="4" align="center">
                {/* <div className={styles.map_wrapper}>
                <img className={styles.map} src="/images/map.png"></img>
              </div> */}
                <div className="card">
                  <div className="img-avatar2">
                    <div>
                      <h3>
                        {" "}
                        <img
                          className={styles.info}
                          src="/images/location.png"
                        ></img>{" "}
                        ¿Como llegar?
                      </h3>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="title-total">
                      <div className="desc">
                        <img className={styles.map} src="/images/map.png"></img>
                      </div>
                    </div>
                  </div>
                </div>

                {/* kjsdklf */}
              </td>
              <td>
                <th>
                  <td>
                    <div className={styles.date2} align="left">
                      <h2 className={styles.weather}>21°C</h2>
                    </div>
                  </td>
                  <td>
                    <div className={styles.date1} align="center">
                      <h4 className={styles.weather}> Marzo 13 2023</h4>
                    </div>
                  </td>
                </th>
              </td>
            </tr>
            <tr>
              <td>
                {/* <div className={styles.date2}>
                  <img
                    className={styles.weather}
                    src="/images/weather-app.png"
                  ></img>
                  21 °C
                </div> */}
                <div className="cloud">
                  <span></span>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <div className="card2">
                  <div className="img-avatar">
                    <img className={styles.info} src="/images/info.png"></img>
                  </div>
                  <div className="card-text">
                    <div className="title-total">
                      <h2>Morgan Sweeney</h2>

                      <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                        <div>
                          <img className={styles.ilistration1} src={gif}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td colSpan="2" align="center">
                <td align="center">
                  <Carrusel className="carrusel" images={pics} />
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
