import React from "react";
import "../sidebar_section/sidebar.css";
/*import icons */
import { Routes, Route } from "react-router-dom";
import AdvertisingDisplay from "../../views/Advertising/Adversising_Display";
import PanelTotem from "../../views/Panel/PanelTotem";
import FormLocation from "../../views/Forms/Locacion";
import SeleccionPlantilla from "../../views/Forms/SeleccionPlantilla";
import Login from "../../views/Login/UserUpdateForm";
import Login from "../../views/Login";
import Login from "../../views/Login/TablaUsers";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
  return (
    <div className="mainContent">
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<PanelTotem />} />
          <Route path="/Publicidad" element={<AdvertisingDisplay />} />
          <Route path="/Locaciones" element={<FormLocation />} />
          <Route path="/Plantillas" element={<SeleccionPlantilla />} />
          <Route path="/UserUpdateForm/:idUsuario" element={<UserUpdateForm />} />
          <Route path="/TablaUsers" element={<TablaUsers/>} />
        </Route>

        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routing;
