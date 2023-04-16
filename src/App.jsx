import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar_section/Sidebar";
import './App.css'
import Routing from "./components/routes/routing"
import { BrowserRouter, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <div className='containerV'>
      <BrowserRouter>
        <Sidebar/>
        <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
