import React, {useEffect, useState} from 'react'
import './header.css'


function Header({toggleTheme}) {


  return (
    <div id="header" className='header'>
        
        <h1>TODO</h1>
        <button className='modeToggle' onClick={() => toggleTheme}></button>
       
    </div>
  )
}

export default Header