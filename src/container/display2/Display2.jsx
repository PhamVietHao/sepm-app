import {React, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
// import './display2.css'
import building89 from '../../components/images/building89.png';
import building10 from '../../components/images/building10.png';

import modal3 from '../../components/images/modal3.png';
import modal4 from '../../components/images/modal4.png';

function Display2() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);
  
  return (
    <div className='rise__display '>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building89}></img>
            </div>
              <div className='rise__display_modal1'>
                <img src={modal3}></img>
              </div>
              <div className='rise__display_buildinginfo'>
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
            <img src={building10}></img>
            </div>
              <div className='rise__display_modal1'>
                <img src={modal4}></img>
              </div>
              <div className='rise__display_buildinginfo'>
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
    </div>
  )
}

export default Display2