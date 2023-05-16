import styles from "./CardT2.module.css";

export function MapT2({data}){
    return(
        <div className="cardT2">
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
                  <div className="card-textT2">
                    <div className="title-totalT2">
                      <div className="descT2">
                        <img className={styles.map} src={data == null?"/images/map.png":data['urlMapa']}></img>
                      </div>
                    </div>
                  </div>
                </div>
    )
    
}