import styles from "./Card.module.css";
import Carrusel from "./Carrusel";
import { pics } from "./Data";
import gif from "/images/animation.gif";
import gifMic from "/images/mic7.gif";
import { useEffect, useState } from "react";
import Timer from "./TimeRedirect/Timer";
import { useNavigate,useLocation } from 'react-router-dom';
import { Weather } from "./weather/weather";

export function Card() {

  const navigate = useNavigate();
  const location = useLocation();
  const [time, SetTime] = useState(3000);
  const [browse, SetBrowse] = useState("");
  const [data,setData]=useState(null);
  const [imagesFinal,setImages]=useState(null);

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  let images;
  let id = null, keysb = null,search = false;
  const searchParams = new URLSearchParams(window.location.search)

  id = searchParams.get('id')==null? null:searchParams.get('id').toString();
  keysb = searchParams.get('keys')==null? null:searchParams.get('keys').toString();

  function handleSubmit(event) {
    if (event.key == "Enter") {

      event.preventDefault();
      SetTime(300);

      let keys = browse.split(" ");
      SetBrowse("");
      setImages(null);
      images = null;
      let reject = ["la", "las", "el", "los"];
      let filteredKeys = keys;

      for (let i = 0; i < reject.length; i++) {
        filteredKeys = filteredKeys.filter((item) => item !== reject[i]);
      }

      navigate('/T1?id='+id+'&keys='+filteredKeys.toString());
    }
  }

  useEffect(()=> {
    let isMounted = true;
    if(id !=null && keysb != null){
      fetch('https://totemapi.azurewebsites.net/api/TotemLocacion?id=' + id +'&keys='+keysb).then(response => response.json())
      .then(result => {
        if(isMounted){
          console.log(result);
          setData(result);
          images = result.urlCarruselImagenes.split(',');
          let imagesF= images.map(image => Object.assign({image}))
          setImages(imagesF);
          console.log(imagesFinal);
          
        }
      })
      
    }
    return () => {isMounted = false}
  }, [location]);
  if(!data){
    return <div>Loading....</div>
  }
  
  
  
  
  return (
    <div className={styles.panel}>
      <Timer time={time} route={'/inactive'}/>
      <div className={styles.topBar}>
        <table  >
          <tbody>
            <tr >
              <td align="left">
                <img className={styles.logo} src="/images/logo.png"></img>
              </td>
              <td align="center">
                <div className={styles.title} align="center">
                  <strong>{data == null?'totem':data['nombre']}</strong>
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
                value={browse}
                onChange={(event) => SetBrowse(event.target.value)}
                onKeyUp={handleSubmit}
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
                <div className="card">
                  <div className="img-avatar2">
                    <div>
                      <h3>
                        <img
                          className={styles.info}
                          src={"/images/location.png"}
                        ></img>
                        ¿Como llegar?
                      </h3>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="title-total">
                      <div className="desc">
                        <img className={styles.map} src={data == null?"/images/map.png":data['urlMapa']}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <th>
                  <td>
                    <div className={styles.date2} align="left">
                      <h2 className={styles.weather}><Weather/></h2>
                    </div>
                  </td>
                  <td>
                    <div className={styles.date1} align="center">
                      <h4 className={styles.weather}> {formattedDate}</h4>
                    </div>
                  </td>
                </th>
              </td>
            </tr>
            <tr>
              <td>
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
                        {data == null?"Bienvenido a los Totems":data['descripcion']}
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
                  <Carrusel className="carrusel" images={imagesFinal==null?pics:imagesFinal} />
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
