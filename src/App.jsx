import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrusel from './components/Carrusel'
import {pics} from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Carrusel  images={pics}/>
    </div>
  )
}

export default App
