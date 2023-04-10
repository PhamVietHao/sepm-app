import React from 'react'
import './gameintro.css'

function Gameintro() {
  return (
    <div className='rise__gameintro section__padding '>
        <div className='rise__gameintro_header'>
            GUARDIANS OF RMIT
            <hr/>
        </div>
        <div className='rise__gameintro_paragraph'>
            <p>Our game has a unique artistic aesthetic and a compelling gameplay mechanic combined in "Guardians of RMIT," a role-playing video game (RPG) set in a school setting. Guardians of RMIT is the game created for learning and education purposes only in semester 2023A in the Software Engineering Project Management course. The purpose of this game is to provide a fun and accessible introduction to the campus's most notable buildings for new students and curious high schoolers. In addition, the reason for this is that despite our Saigon South Campus's spacious infrastructure and well-equipped amenities, it might be challenging to find classrooms and meeting spaces due to the large number of guests that arrive each year. Hence, "Guardians of RMIT" aims to make touring the campus more fun for both existing and potential students. </p>
        </div>
        <button type="button" id='gamebtn'>Get Started</button>            
    </div>
  )
}

export default Gameintro