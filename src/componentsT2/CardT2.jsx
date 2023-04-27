import styles from "./CardT2.module.css";
import CarruselT2 from "./CarruselT2";
import { MapT2 } from "./MapT2";
import { pics } from "./DataT2";
import gif from "/images/animation.gif";

import gifMic from "/images/mic6.gif";
import { DescriptionT2 } from "./DescriptionT2";
import { RelojT2 } from "./RelojT2";
import { DateT2 } from "./DateT2";
import { useState } from "react";

export function CardT2() {
  const [browse,SetBrowse]=useState('');
  function handleSubmit(event) {
    event.preventDefault();
    // Realizar la lógica de busqueda aquí
    
  }
  return (
    <div className={styles.panel}>
      <div className={styles.topBar}>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
      <table  className="search_wrapper">
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
                value={browse}
                onChange={(event)=>SetBrowse(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RelojT2/>
            </td>
            <td > 
              <DateT2/>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.middleBar}>
        <table>
          <tbody>
            <tr>
              <td>
                <div>
                  <img className={styles.ilistration1} src={gif}></img>
                </div>
              </td>
              <td align="center">
                {/* <div className={styles.map_wrapper}>
                <img className={styles.map} src="/images/map.png"></img>
              </div> */}
                <DescriptionT2></DescriptionT2>

                {/* kjsdklf */}
              </td>
            </tr>
          </tbody>
        </table>
        <table className={styles.info_wrapper}>
          <tbody>
            <tr>
              <td>
                <CarruselT2 className="carrusel" images={pics} />
              </td>
              <td>
                <MapT2></MapT2>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <svg viewBox="0 0 2 1" preserveAspectRatio="none">
            <defs>
              <path
                id="w"
                d="
                  m0 1v-.5 
                  q.5.5 1 0
                  t1 0 1 0 1 0
                  v.5z"
              />
            </defs>
            <g>
              <use className={styles.use1} href="#w" y=".0" fill="#2d55aa" />
              <use className={styles.use2} href="#w" y=".1" fill="#3461c1" />
              <use className={styles.use3} href="#w" y=".2" fill="#4579e2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
