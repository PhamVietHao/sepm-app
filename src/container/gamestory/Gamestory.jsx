import React from 'react'
import './gamestory.css'
import herobanner from '../../components/images/gamebanner.png';

function Gamestory() {
  return (
    <div className='rise__gamestory section__padding'>
        <div className='rise__gamestory_image'>
            <img src={herobanner} />
        </div>
        <div className='rise__gamestory_header'>
            <h3>GAME STORY</h3>
            <p>The RMIT Saigon South campus has been overrun by monsters, our Building 1, Academic Building 2, and Recreational and Events Complex are where the bulk of the fiercest monsters are now hiding out. In this game, you play as a hero who studied at RMIT. An RMIT letter arrived in the player's mailbox one day. The player receives an email from RMIT asking for assistance since the Saigon South campus is in peril. When the player first arrives on campus, they catch the odor of monsters. The current scenario at RMIT SGS Campus has been made clear to the athlete after receiving a greeting and details from the school board. Monsters have invaded the campus and taken over the buildings; the most powerful monsters are stationed at the key buildings to protect them. It is the player's job to wipe out those monsters and return life back to normal at RMIT SGS Campus so that the students and faculty can get back to work.</p>
        </div>
        
    </div>
  )
}

export default Gamestory