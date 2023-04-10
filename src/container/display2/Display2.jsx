import React from 'react'
// import './display2.css'
import building1 from '../../components/images/building1.png';
import modal1 from '../../components/images/modal1.png';

function Display2() {
  return (
    <div className='rise__display '>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <img src={building1}></img>
              <div className='rise__display_modal1'>
                <img src={modal1}></img>
              </div>
          </div>
      </div>
      
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <img src={building1}></img>
              <div className='rise__display_modal1'>
                <img src={modal1}></img>
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Display2