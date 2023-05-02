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

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);  
  const handleShow2 = () => setShow2(true);
  
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
                  <div className='modalContainer section__padding'>
                  <Modal.Header>
                    <Modal.Title className='title'>BEANLAND BUILDING</Modal.Title>
                    <div className='modal__btn_section'>
                      <button id='modal_btn' onClick={handleClose}> X </button>                      
                    </div>
                  </Modal.Header>
                  <Modal.Body className='modal_body'>
                    <h3>Introduction</h3>
                    <p>This is a multifunctional building in RMIT University and it can be considered one of the main buildings since its capacity is the highest and many university’s departments are located here. Moreover, this building has 5 levels and there are two staircases to each level: one staircase is next to the elevator inside the building and one more is situated outside the building</p>
                    <h3>Detail:</h3>
                    <ul>
                      <li>First floor: The first floor consists of the core departments in RMIT University such as RMIT Connect, Job Shop, Student Council, Offices, etc and other facilities like Media Studio, Bowen Theatre, Data Centre, Stationary Shop, Computer Lab, Canteen, etc. Students can contact most of the university’s offices on this level and there are classes organized in the theaters or rooms here as well. Students can also enjoy their lunch break at the canteen, which offers many choices since there are three restaurants here</li>
                      <li>Second floor: The second floor of this building mainly consists of classrooms and computer labs in the area behind the elevator. Classes usually take place in this area and students can use the map to navigate. Facing the elevator is the gallery displaying students’ art works, and the Melbourne Theatre also located in that area together with a cafeteria and some rooms for meetings. Moreover, Melbourne Theatre is a two-floor theatre, so it can hold up to a hundred students.</li>
                      <li>Third Floor: The third floor has a relatively identical layout as the second floor. The area behind the elevators are the classrooms but the facing area is the Beanland Library. In the library, there are some rooms for group meetings, so students can book a place here to have team meetings and group discussions. The Melbourne Theatre is also located on this level because it uses two floors. Most students access this floor for the Beanland library and for searching books since it has more book shelves or they go to classes.</li>
                      <li>Fourth Floor: The fourth floor has the exact same structure and layout as the third one. The classrooms are on one side and the Beanland library is located on the other side since the Beanland library is a two-storey building. Most of the time, students go to this floor for studying as there are computer labs here or they are here for group meetings in the library since there are more tables and chairs on this second floor of the library and there are more private rooms in addition.</li>
                      <li>Fifth Floor: The fifth floor only contains classrooms since it is exclusively for the School of English & University Pathways (SEUP) of RMIT University. The head office is the area facing the elevator, and the remaining area is for classrooms.</li>
                    </ul>
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
            <img src={building2}></img>
            </div>
              <div className='rise__display_modal1'>
                <img src={modal2}></img>
              </div>
              <div className='rise__display_buildinginfo building1st'>
                <h3>Academic Building 2</h3>
                <h4>Building 2</h4>
                <button type="button" id='seebtn' onClick={handleShow2}>See more</button> 
                <Modal className='modalBackground' show={show2} onHide={handleClose2}>
                  <div className='modalContainer section__padding'>
                  <Modal.Header closeButton>
                    <Modal.Title className='title'>ACADEMIC BUILDING 2</Modal.Title>
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

export default Display