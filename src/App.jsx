import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from "./components/Logo";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo/>
    </div>
  )
}

export default App
