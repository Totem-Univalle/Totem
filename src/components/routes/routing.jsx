import React from "react";
import "../sidebar_section/sidebar.css";
/*import icons */
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import AdvertisingDisplay from "../../views/Advertising/Adversising_Display";
import PanelTotem from "../../views/Panel/PanelTotem";
import FormLocation from "../../views/Forms/Locacion";
import SeleccionPlantilla from "../../views/Forms/SeleccionPlantilla";
import Login from "../../views/Login/LoginPage";
import ForgotPassword from "../../views/Login/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import SelectTotem from "../../views/TotemsView/SelectTotem";
import Logos from "../../views/Forms/Logos";
/* import TotemForm from "../../views/Forms/TotemForm";
import AdminForm from "../../views/Admin_Form/AdminForm"; */
import { useLocalStorage } from "react-use";
import UserUpdateForm from "../../views/Login/UserUpdateForm";
import TotemEdit from "../../views/Forms/TotemEdit";
import LocacionesTable from "../../views/Forms/ListaLocaciones";
import Locacion from "../../views/Forms/Locacion";

const Routing = () => {
  const [token] = useLocalStorage('token');
  return (
    <div className="mainContent">
      <Routes>
        <Route element={<PrivateRoute token={token}/>}>
          <Route path="Panel" element={<PanelTotem />} />
          <Route path="Publicidad/:id" element={<AdvertisingDisplay />} />
          <Route path="Locaciones" element={<FormLocation />} />
          <Route path="ListaLocaciones/:id" element={<LocacionesTable />} />
          <Route path="Plantillas" element={<SeleccionPlantilla />} />
          <Route path="Logos" element={<Logos />} />
          <Route path="EditLocacion/:id" element={<Locacion />} />
          {/*<Route path="/AdminForm" element={<AdminForm />} />
          <Route path="/TotemForm" element={<TotemForm />} />*/}
          <Route path="TotemEdit/:id" element={<TotemEdit/>} />
          <Route path="/Locaciones" element={<FormLocation />} />
          <Route path="/UserUpdateForm/:idUsuario" element={<UserUpdateForm />} />
        </Route>

        <Route index element={<Login />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="Totems" element={<SelectTotem/>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </div>
  );
};

export default Routing;
