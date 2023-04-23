import React from 'react'
import './gameguide.css'

function Gameguide() {
  return (
    <div className='rise__gameguide section__padding '>
      <div className='rise__gameguide_header'>
        GAME GUIDE
      </div>
      <div className='rise__gameguide_video'>
      <iframe width="800" height="600" src="https://www.youtube.com/embed/mPZkdNFkNps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Gameguide
