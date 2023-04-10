import React from 'react'
import './display.css'
import building1 from '../../components/images/building1.png';
import building2 from '../../components/images/building2.png';

import modal1 from '../../components/images/modal1.png';
import modal2 from '../../components/images/modal2.png';
function Display() {
  return (
    <div className='rise__display'>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building1}></img>
            </div>
              <div className='rise__display_modal1'>
                <img src={modal1}></img>
              </div>
              <div className='rise__display_buildinginfo'>
                <h3>Beanland Building</h3>
                <h4>Building 1</h4>
                <button type="button" id='seebtn'>See more</button>
              </div>
          </div>
      </div>
      
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building2}></img>
            </div>
              <div className='rise__display_modal1'>
                <img src={modal2}></img>
              </div>
              <div className='rise__display_buildinginfo'>
                <h3>Beanland Building</h3>
                <h4>Building 1</h4>
                <button type="button" id='seebtn'>See more</button> 
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Display