import {React, useState} from 'react'
import './display.css'
import { Button, Modal } from 'react-bootstrap';

import building1 from '../../components/images/building1.png';
import building2 from '../../components/images/building2.png';

import modal1 from '../../components/images/modal1.png';
import modal2 from '../../components/images/modal2.png';
function Display() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);
  
  return (
    <div className='rise__display'>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img '>
            <img src={building1}></img>
            </div>
              <div className='rise__display_modal1 building__1'>
                <img src={modal1}></img>
              </div>
              <div className='rise__display_buildinginfo building1st'>
                <h3>Beanland Building</h3>
                <h4>Building 1</h4>
                <button type="button" id='seebtn' onClick={handleShow}>See more</button>
                <Modal className='modalBackground' show={show} onHide={handleClose}>
                  <div className='modalContainer'>
                  <Modal.Header closeButton>
                    <Modal.Title className='title'>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='body'>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer className='footer'>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                  </div>
                </Modal>
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
              <div className='rise__display_buildinginfo building1st'>
                <h3>Academic Building 2</h3>
                <h4>Building 2</h4>
                <button type="button" id='seebtn' onClick={handleShow}>See more</button> 
                <Modal className='modalBackground' show={show} onHide={handleClose}>
                  <div className='modalContainer'>
                  <Modal.Header closeButton>
                    <Modal.Title className='title'>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='body'>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer className='footer'>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                  </div>
                </Modal>
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Display