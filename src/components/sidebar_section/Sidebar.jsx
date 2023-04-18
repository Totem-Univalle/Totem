import React from "react";
import "./sidebar.css";
/*import icons */
import { MdEditLocationAlt } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { BrowserRouter, Link } from "react-router-dom";
import Routing from "../routes/routing";

const navegation = [
  {
    name: "Locaciones",
    current: false,
    icon: MdEditLocationAlt,
    path: "/Locaciones",
  },
  { name: "Plantillas", current: false, icon: HiTemplate, path: "/Plantillas" },
  {
    name: "Publicidad",
    current: false,
    icon: MdContactMail,
    path: "/Publicidad",
  },
  {
    name: "Logos",
    current: false,
    icon: HiTemplate,
    path: "/Logos",
  },
  {
    name: "Admins",
    current: false,
    icon: MdContactMail,
    path: "/AdminForm",
  },
  {
    name: "Totems",
    current: false,
    icon: HiTemplate,
    path: "/TotemForm",
  },

];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Sidebar = () => {
  return (
    <BrowserRouter>
      <div className="sideBar grid">
        <div className="logoDiv flex">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2209/2209054.png"
              alt=""
              className="Image Name"
            />
          </Link>
        </div>

        <div className="menuDiv">
          <h3 className="divTitle">MENU</h3>
          <nav>
            <ul className="menuList grid">
              {navegation.map((item) => (
                <li className="listItem">
                  <Link to={item.path} className="menuLink" flex>
                    <item.icon className="icon" />
                    <span className="smallText">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="settingDiv">
          <h3 className="divTitle">AJUSTES</h3>
          <ul className="menuList grid">
            <li className="listItem">
              <a href="#" className="menuLink" flex>
                <MdContactMail className="icon" />
                <span className="smallText">Contactanos</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sideBardCard">
          <BsQuestionCircle className="icon" />
          <div className="cardContent">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <h3>Help Center</h3>
            <p>Please contact us</p>
            <button className="btn">Go to help</button>
          </div>
        </div>
      </div>
      <Routing/>
    </BrowserRouter>
  );
};

export default Sidebar;
