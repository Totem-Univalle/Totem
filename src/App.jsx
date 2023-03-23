import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Locacion from "./components/Locacion";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
      
          <Locacion/>

        </main>
      </div>
    </div>
  )
}

export default App
