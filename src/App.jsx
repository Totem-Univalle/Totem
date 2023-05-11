import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "./components/Card";
import { CardT2 } from "./componentsT2/CardT2";
import { MainPage } from "./components/pruebas/pag1";
import InactivityPage from "./components/pruebas/pag2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage /> }>
        </Route>
        <Route path="/T1" element={<Card />}/>
        <Route path="/T2" element={<CardT2 />}/>
        <Route path="/inactive" element={<InactivityPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
