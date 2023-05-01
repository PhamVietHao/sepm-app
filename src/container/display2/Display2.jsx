import {React, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import './display2.css'
import building89 from '../../components/images/building89.png';
import building10 from '../../components/images/building10.png';

import modal3 from '../../components/images/modal3.png';
import modal4 from '../../components/images/modal4.png';

function Display2() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);  
  const handleShow2 = () => setShow2(true);
  
  return (
    <div className='rise__display '>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building89}></img>
            </div>
              <div className='rise__display_modal1 building89'>
                <img src={modal3}></img>
              </div>
              <div className='rise__display_buildinginfo building2nd'>
                <h3>SSET Technical and Residential Building</h3>
                <h4>Building 8 and Building 9</h4>
                <button type="button" id='seebtn' onClick={handleShow}>See more</button>
                <Modal className='modalBackground' show={show} onHide={handleClose}>
                  <div className='modalContainer section__padding'>
                  <Modal.Header closeButton>
                    <Modal.Title className='title'>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='body'>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer className='modal_footer'>
                    <button id='modal_btn' onClick={handleClose}> Close </button>
                  </Modal.Footer>
                  </div>
                </Modal>
              </div>
          </div>
      </div>
      
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building10}></img>
            </div>
              <div className='rise__display_modal1'>
                <img src={modal4}></img>
              </div>
              <div className='rise__display_buildinginfo building2nd'>
                <h3>Recreation and Events Complex</h3>
                <h4>Building 10</h4>
                <button type="button" id='seebtn' onClick={handleShow2}>See more</button>
                <Modal className='modalBackground' show={show2} onHide={handleClose2}>
                  <div className='modalContainer section__padding'>
                  <Modal.Header closeButton>
                    <Modal.Title className='title'>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='body'>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer className='modal_footer'>
                    <button id='modal_btn' onClick={handleClose2}> Close </button>
                  </Modal.Footer>
                  </div>
                </Modal>
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Display2