import "./App.css";
import Sidebar from "./components/sidebar_section/Sidebar";
import "./App.css";
import Routing from "./components/routes/routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="containerV">
      <Sidebar />
      <Routing />
      
    </div>
  );
}

export default App;
