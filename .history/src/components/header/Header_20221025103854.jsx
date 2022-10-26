import React from 'react'
import './header.css'


function Header({toggleTheme, theme}) {


  return (
    <div id="header" className='header'>
        
        <h1>TODO</h1>
        <button className={`modeToggle ${theme}`} onClick={toggleTheme}></button>
       
    </div>
  )
}

export default Header