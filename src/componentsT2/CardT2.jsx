import styles from "./CardT2.module.css";
import CarruselT2 from "./CarruselT2";
import { MapT2 } from "./MapT2";
import { pics } from "./DataT2";
import gif from "/images/animation.gif";
import gifMic from "/images/mic6.gif";
import { DescriptionT2 } from "./DescriptionT2";
import { RelojT2 } from "./RelojT2";
import { DateT2 } from "./DateT2";
import { useEffect, useState } from "react";
import Timer from "../components/TimeRedirect/Timer";
import { useNavigate,useLocation } from 'react-router-dom';

export function CardT2() {
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

      navigate('/T2?id='+id+'&keys='+filteredKeys.toString());
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
        }
      })
      
    }
    return () => {isMounted = false}
  }, [location]);
  if(!data && id==null){
    return <div>Loading....</div>
  }

  return (
    <div className={styles.panel}>
      <Timer time={time} route={'/inactive'}/>
      <div className={styles.topBar}>
        <table>
          <tbody>
            <tr>
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
          <tr>
            <td>
              <RelojT2 />
            </td>
            <td>
              <DateT2 date={formattedDate} />
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
                <DescriptionT2 description={data == null?"Bienvenido a los Totems":data['descripcion']}></DescriptionT2>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={styles.info_wrapper}>
          <tbody>
            <tr>
              <td>
                <CarruselT2 className="carrusel" images={imagesFinal==null?pics:imagesFinal} />
              </td>
              <td>
                <MapT2 data={data}></MapT2>
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
