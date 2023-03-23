import { useState } from 'react'
import './App.css'
import PanelTotem from './components/PanelTotem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
           <PanelTotem/>
        </main>
      </div>
    </div>
  )
}

export default App
