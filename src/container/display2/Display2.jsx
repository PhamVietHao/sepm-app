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
                    <div className='modal__btn_section'>
                      <button id='modal_btn' onClick={handleClose}> X </button>                      
                    </div>
                  </Modal.Header>
                  <Modal.Body className='modal_body'>
                    <h3>Introduction</h3>
                    <p>The technical rooms for SST are located in Building 8. Here is where SSET students go to study. For the benefit of SSET students, it has numerous sophisticated machines. There are a total of six floors in this building.The classroom from the 2nd floor onward is mostly used for English class but if the room is available students can use it for self study.</p>
                    <h3>Detail:</h3>
                  </Modal.Body>
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
                    <Modal.Title className='title'>Recreation and Events Complex</Modal.Title>
                    <div className='modal__btn_section'>
                      <button id='modal_btn' onClick={handleClose2}> X </button>                      
                    </div>
                  </Modal.Header>
                  <Modal.Body className='modal_body'>
                    <h3>Introduction</h3>
                    <p>This building is known as the school's REC. Upon entrance, you will be able to access a very large sporthall used for basketball and other variety of sports. It is a place filled with an energetic and healthy environment which will keep you fit while you are studying, along with promoting social connectivity and multi-cultural immersion. This is also the place where the student council’s members usually gather and hold events.</p>
                    <h3>Detail:</h3>
                      <ul>
                        <li>First floor: The first floor of this building is versatile. In the lobby, there is a mattress area in a corner for exercising and there are some ping pong tables on the other side, which can be used for organizing events. The largest area in REC is the sports hall which is a combined court of basketball, badminton and futsal. This is also one of the most well-known places for students that love sports. Besides that, there is a gym next to a sports hall for people to work out. In addition, there is a clinic on this floor for people with injuries or physical issues.</li>
                        <li>Second floor: The second floor has some functional rooms and offices such as Student Life’s office. There are two rooms called Flemington, which have mirrors, musical instruments for musical activities. In addition, there is a bar and restaurant here, connecting to the grandstand of the sports field.</li>
                      </ul>
                  </Modal.Body>
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