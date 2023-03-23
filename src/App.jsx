import React from 'react'
import './App.css'
import Sidebar from './components/sidebar_section/Sidebar'
import Body from './components/body_section/Body'

const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App