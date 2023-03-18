import React from 'react'
import './sidebar.css'
/*import icons */
import {RiContactsBookFill} from 'react-icons/ri'
import {MdEditLocationAlt} from 'react-icons/md'
import {HiTemplate} from 'react-icons/hi'
import {MdContactMail} from 'react-icons/md'
import {BsQuestionCircle} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src="https://cdn-icons-png.flaticon.com/512/2209/2209054.png" alt="" className="Image Name" />
        <h2>Totem</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MENU 
        </h3>
        <ul className="menuList grid">

          <li className="listItem">
            <a href="#" className="menuLink" flex>
              <MdEditLocationAlt className='icon'/>
              <span className="smallText">
              Locaciones
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink" flex>
              <HiTemplate className='icon'/>
              <span className="smallText">
                Plantillas
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink" flex>
              <RiContactsBookFill className='icon'/>
              <span className="smallText">
                Publicidad
              </span>
            </a>
          </li>

        </ul>
      </div>
      
      <div className="settingDiv">
        <h3 className="divTitle">
          AJUSTES
        </h3>
        <ul className="menuList grid">

          <li className="listItem">
            <a href="#" className="menuLink" flex>
              <MdContactMail className='icon'/>
              <span className="smallText">
              Contactanos
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="sideBardCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Please contact us</p>
          <button className='btn'>Go to help</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar