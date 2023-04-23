import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='rise_navbar'>
      <div className='rise_navbar-links_logo'>RISE</div>
      <div className='rise_navbar-links'>
        <div className='rise_navbar-links_container'>
          <p><a href="#TEAMPROFILE">TEAM PROFILE</a></p>
          <p><a href="#ABOUTCAMPUS">ABOUT CAMPUS</a></p>
          <p><a href="#OURGAME">OUR GAME</a></p>
          <p><a href="#EVENT">EVENT</a></p>
        </div>        
      </div>
    </div>
    
  )
}

export default Navbar
