import React from "react";
import "../sidebar_section/sidebar.css";
/*import icons */
import { MdEditLocationAlt } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdvertisingDisplay from "../../views/Advertising/Adversising_Display";
import PanelTotem from '../../views/Panel/PanelTotem'
import FormLocation from '../../views/Forms/Locacion'
import SeleccionPlantilla from "../../views/Forms/SeleccionPlantilla";
import Logos from "../../views/Forms/Logos";
import TotemForm from "../../views/Forms/TotemForm";
import AdminForm from "../../views/Admin_Form/AdminForm";
import ListaLocaciones from "../../views/Forms/ListaLocaciones"

const Routing = () => {
  return (
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<PanelTotem/>} />
          <Route path="/Publicidad" element={<AdvertisingDisplay />} />
          <Route path="/Locaciones" element={<FormLocation/>} />
          <Route path="/ListaLocaciones" element={<ListaLocaciones/>} />
          <Route path="/Plantillas" element={<SeleccionPlantilla/>} />
          <Route path="/Logos" element={<Logos/>} />
          <Route path="/AdminForm" element={<AdminForm/>} />
          <Route path="/TotemForm" element={<TotemForm/>} />
        </Routes>
      </div>
  );
};

export default Routing;
