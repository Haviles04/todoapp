import React from 'react'
import './header.css'
import bgdesktoplight from '../../assests/bg-desktop-light.jpg'


function Header() {
  return (
    <div id="header" className='header'>
        <h1>TODO</h1>
        <button className='modeToggle'></button>
        <img src={bgdesktoplight} alt="mountain view"></img>

    </div>
  )
}

export default Header