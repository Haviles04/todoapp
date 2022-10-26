import React from 'react'
import './header.css'
import bgdesktoplight from '../../assests/bg-desktop-light.jpg'


function Header() {
  return (
    <div id="header" className='header'>
        <div className="headercontainer">
        <h1>TODO</h1>
        <button className='modeToggle'></button>
        </div>
    </div>
  )
}

export default Header