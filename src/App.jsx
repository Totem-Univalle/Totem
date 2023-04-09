import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar_section/Sidebar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Sidebar/>
    </div>
  );
}

export default App;
