import React from 'react'
import './body.css'
import Top from './top_section/Top'
import Activity from './activity_section/Activity'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>

      <div className="botton flex">
        <Activity/>
      </div>
    </div>
  )
}

export default Body