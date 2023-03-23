import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrusel from './components/Publicidad/Carrusel'
import {pics} from './components/Publicidad/Data'
import { Reloj } from './components/Publicidad/Reloj'
import { Fecha } from './components/Publicidad/Fecha'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div><Reloj></Reloj></div>
      <Fecha></Fecha>
      <Carrusel  images={pics}/>
    </div>
  )
}

export default App
