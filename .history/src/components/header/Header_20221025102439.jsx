import React, {useState} from 'react'
import './header.css'


function Header() {
  
  const [theme, setTheme] = useState('light');

  function toggleTheme(){
    if(theme === 'light'){
      setTheme('dark');
    }else {
      setTheme('light');
    }
  }



  return (
    <div id="header" className='header'>
        
        <h1>TODO</h1>
        <button className='modeToggle' onClick={() => toggleTheme}></button>
       
    </div>
  )
}

export default Header