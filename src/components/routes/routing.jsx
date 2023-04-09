import React from "react";
import "../sidebar_section/sidebar.css";
/*import icons */
import { MdEditLocationAlt } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdvertisingDisplay from "../../views/Advertising/Adversising_Display";

const Routing = () => {
  return (

      <div className="mainContent">
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/publicidad" element={<AdvertisingDisplay />} />
        </Routes>
      </div>
  );
};

export default Routing;
