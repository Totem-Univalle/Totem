import styles from "./CardT2.module.css";
import styles2 from "../styleT2/cardT2.scss?inline";

export function MapT2(){
    return(
        <div className={styles2.cardT2}>
                  <div className="img-avatar2T2">
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
                  <div className={styles2.cardtextT2}>
                    <div className={styles2.titletotalT2}>
                      <div className={styles2.descT2}>
                        <img className={styles.map} src="/images/map.png"></img>
                      </div>
                    </div>
                  </div>
                </div>
    )
    
}