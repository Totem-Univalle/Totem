import React from "react";
import "../sidebar_section/sidebar.css";
/*import icons */
import { MdEditLocationAlt } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdvertisingDisplay from "../../views/Advertising/Adversising_Display";
import PanelTotem from '../../views/Panel/PanelTotem'

const Routing = () => {
  return (

      <div className="mainContent">
        <Routes>
          <Route path="/" element={<PanelTotem/>} />
          <Route path="/publicidad" element={<AdvertisingDisplay />} />
        </Routes>
      </div>
  );
};

export default Routing;
