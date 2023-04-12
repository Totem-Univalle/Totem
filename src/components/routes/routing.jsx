import React from "react";
import "../sidebar_section/sidebar.css";
/*import icons */
import { MdEditLocationAlt } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdvertisingDisplay from "../../views/Advertising/Adversising_Display";
import PanelTotem from '../../views/Panel/PanelTotem'
import FormLocation from '../../views/Forms/Locacion'

const Routing = () => {
  return (
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<PanelTotem/>} />
          <Route path="/Publicidad" element={<AdvertisingDisplay />} />
          <Route path="/Locaciones" element={<FormLocation/>}/>
        </Routes>
      </div>
  );
};

export default Routing;
