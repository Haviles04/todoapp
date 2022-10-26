import React from 'react'
import './header.css'
import bgdesktoplight from '../../assests/bg-desktop-light.jpg'
import sunicon from '../../assests/icon-sun.svg'

function Header() {
  return (
    <div id="header" className='header'>
        <h1>TODO</h1>
        <button><img src={sunicon}></img></button>
        <img src={bgdesktoplight} alt="mountain view"></img>

    </div>
  )
}

export default Header