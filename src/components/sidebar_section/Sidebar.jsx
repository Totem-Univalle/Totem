import React from "react";
import "./sidebar.css";
/*import icons */
import { MdEditLocationAlt } from "react-icons/md";
import { HiTemplate, HiHome } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const totem = JSON.parse(localStorage.getItem("totem"));

const navegation = [
  {
    name: "Panel Totems",
    current: false,
    icon: HiHome,
    path: `/Panel`,
  },
  {
    name: "Locaciones",
    current: false,
    icon: MdEditLocationAlt,
    path: `/ListaLocaciones/:${totem === null ? 0 : totem.idTotem}`,
  },
  { name: "Plantillas", current: false, icon: HiTemplate, path: "/Plantillas" },
  {
    name: "Publicidad",
    current: false,
    icon: MdContactMail,
    path: `/Publicidad/:${totem === null ? 0 : totem.idTotem}`,
  },
  {
    name: "Logos",
    current: false,
    icon: HiTemplate,
    path: "/Logos",
  },
  /* {
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
  }, */
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Sidebar = () => {
  const location = useLocation();

  // Verifica si la ruta actual es "/Login"
  if (
    location.pathname === "/" ||
    location.pathname === "/ForgotPassword" ||
    location.pathname === "/Panel"  ||
    location.pathname === "/Totems"
  ) {
    return null; // Retorna null para ocultar el sidebar
  }

  return (
    <div className="sideBar grid">
      {/* <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2209/2209054.png"
            alt=""
            className="Image Name"
          />
        </Link> */}
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-6">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-12 w-12 rounded-full"
              src={totem === null ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : totem.urlLogo}
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 translate-x-1/2"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-1/2"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/UserUpdateForm/:1"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Perfil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/Logo"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Logo
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/Login"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

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
  );
};

export default Sidebar;
