import {React, useState, useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import Aos from 'aos';
import './teaminfo.css'
import Hao from '../../components/images/Hao.png';
import Ngoc from '../../components/images/Ngoc.png';
import Thach from '../../components/images/Thach.png';
import Quan from '../../components/images/Quan.png';
import Facebook from '../../components/images/facebook.png';
import Instagram from '../../components/images/instagram.png';
import Linkedin from '../../components/images/linkedin.png';

function Teaminfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div id='TEAMPROFILE' className='section__padding'>
        <div className='rise__teaminfo_section'>
          <div className='rise__teaminfo_header'>
            <h1>TEAM PROFILE</h1>
            <hr/>
          </div>
        </div>
        
        <div className='rise__teaminfo_paragraph'>
          <p>We are team R.I.S.E (RMIT Innovative and Strategic Entrepreneurs) from class group 2. Our team name stands for RMIT Innovative and Strategic Entrepreneurs, since we are . Our team consists of 4 people who are Duong Vu Thanh Ngoc, Ngo Tran Bao Thach, Nguyen Minh Quan and Pham Viet Hao. Although all members of our team are pursuing the bachelor of Information Technology, we have different minors. Ngoc is studying Web Development, Hao’s learning path is Cloud Development, Quan’s minor is Artificial Intelligence and Thach is following the learning path of Data Analytics. Despite our differences, we share the same targets and goals in this course, which is to create a product to help RMIT students, lecturers and visitors as well as improve the reputation of RMIT University.</p>
        </div>
        
        <div className='rise__teaminfo_member_section' data-aos="fade-right">
          <div className='rise__teaminfo_member'>
            <div className='profile_picture'>
              <img src={Ngoc} />
            </div>
            <div className='profile_name'>
              <h3>Dương Vũ Thanh Ngọc</h3>
            </div>
            <div className='profile_sid'>
              <p>s3924496</p>
            </div>
            <div className='social_media'>
              <a href="https://www.facebook.com/ngoc.duongvuthanh"  target="_blank"><img src={Facebook}/></a>
              <a href="https://www.instagram.com/ngoooooooc/?fbclid=IwAR3wqh2f_T3PBPnjxPVjdWGxdvEdufG-NMXYatpbxDojKmdbkjOSROS6yms" target="_blank"><img src={Instagram}/></a>
              <a href="https://www.linkedin.com/in/ngoc-duong-vu-thanh-07b7a7270/?fbclid=IwAR3nyBPHy7ULXqIQ0CByCO0SKMTVksCxAofzXuloMMotvFXhQ2tSs-V2H2c" target="_blank"><img src={Linkedin}/></a>
            </div>
          </div>

          <div className='rise__teaminfo_member'>
            <div className='profile_picture'>
              <img src={Thach} />
            </div>
            <div className='profile_name'>
              <h3>Ngô Trần Bảo Thạch</h3>
            </div>
            <div className='profile_sid'>
              <p>s3927021</p>
            </div>
            <div className='social_media'>
              <a href="https://www.facebook.com/profile.php?id=1000086121426618"  target="_blank"><img src={Facebook}/></a>
              <a href="https://www.instagram.com/_thaddeus.ngo_/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR353Iz8K67ThUGI-VY7cfs2z6Nxvx2VHs35-kegVZ2SqYSVP-GJ5r2zBqk" target="_blank"><img src={Instagram}/></a>
              <a href="https://www.linkedin.com/in/ngotranbaothach?fbclid=IwAR0JrPbudPpTK_5-_2Hg8c-Crsbngi2S4BklwX0EIVA7ikaaQ9klGBLKQkQ" target="_blank"><img src={Linkedin}/></a>
            </div>
          </div>

          <div className='rise__teaminfo_member'>
            <div className='profile_picture'>
              <img src={Quan} />
            </div>
            <div className='profile_name'>
              <h3>Nguyễn Minh Quân</h3>
            </div>
            <div className='profile_sid'>
              <p>s3927181</p>
            </div>
            <div className='social_media'>
              <a href="https://www.facebook.com/quanvlad"  target="_blank"><img src={Facebook}/></a>
              <a href="https://www.instagram.com/quan.vlad47/" target="_blank"><img src={Instagram}/></a>
              <a href="https://www.linkedin.com/in/quan-vladimir47/" target="_blank"><img src={Linkedin}/></a>
            </div>
          </div>

          <div className='rise__teaminfo_member'>
            <div className='profile_picture'>
              <img src={Hao} />
            </div>
            <div className='profile_name'>
              <h3>Phạm Viết Hào</h3>
            </div>
            <div className='profile_sid'>
              <p>s3891710</p>
            </div>
            <div className='social_media'>
              <a href="https://www.facebook.com/profile.php?id=100004533015898"  target="_blank"><img src={Facebook}/></a>
              <a href="https://www.instagram.com/haoizasorcerer/" target="_blank"><img src={Instagram}/></a>
              <a href="https://www.linkedin.com/in/pham-viet-hao-3087ba277/" target="_blank"><img src={Linkedin}/></a>
            </div>
          </div>         
        </div>
        <div className='rise__teaminfo_btn'>
          <button type="button" id='seebtn' onClick={handleShow}>Our goal</button>
          <Modal className='modalBackground' show={show} onHide={handleClose}>
                  <div className='modalContainer'>
                  <div className='modal__btn_section '>
                    <button id='modal_btn_close' onClick={handleClose}><span>X</span></button>                      
                  </div>
                  <Modal.Header>
                    <Modal.Title className='title'>OUR GOAL</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='modal_body'>
                    <h3>Team name</h3>
                    <p>R.I.S.E (RMIT Innovative and Strategic Entrepreneurs)</p>
                    <h3>Team introduction</h3>
                    <p>We are team R.I.S.E from class group 2. Our team name stands for RMIT Innovative and Strategic Entrepreneurs, since we are . Our team consists of 4 people who are Duong Vu Thanh Ngoc, Ngo Tran Bao Thach, Nguyen Minh Quan and Pham Viet Hao. Although all members of our team are pursuing the bachelor of Information Technology, we have different minors. Ngoc is studying Web Development, Hao’s learning path is Cloud Development, Quan’s minor is Artificial Intelligence and Thach is following the learning path of Data Analytics. Despite our differences, we share the same targets and goals in this course, which is to create a product to help RMIT students, lecturers and visitors as well as improve the reputation of RMIT University.</p>
                    <h3>Team Goal</h3>
                    <ul>
                      <li>Firstly, since RMIT University has an enormous campus in Saigon South with many buildings together with the naming convention and the layout of the rooms are slightly confusing, there are a lot of people getting lost and they spend a lot of time navigating around the campus. Thanks to our research and survey, we found out besides from new students and visitors, the majority is actually current students. Therefore, our goal is to create a web application that mainly focuses on introducing RMIT University and Saigon South campus exclusively. Furthermore, it will contain more specific information about the layout of campus and the rooms in each building, which can help users find rooms easier.</li>
                      <li>Secondly, we have discovered that there are equivalent questions about finding a specific location, navigating, and other general questions that expect the same answers. However, RMIT Student Connect, a department that can answer these questions, only works in office hours and students or visitors cannot have their answers anytime they want. Hence, in our web application, there is a chatbot available all time to answer these general questions.</li>
                      <li>Finally, since there have not been any means of entertainment focusing on Saigon South Campus, our team has created a game for many reasons. The first reason is that the users can freely discover the campus which is the game map at any time they want instead of joining in virtual tours or campus tours. Secondly, to enhance their experience and stimulate their sense of victory, they can fight against monsters in our game while discovering and if they win the final boss, they can receive a certificate with a similar appearance to the Bachelor’s degree graduation certificate. Finally, our game can attract more students to RMIT University, especially students who want to join the Game Design program.</li>
                    </ul>
                  </Modal.Body>
                  <Modal.Footer className='modal_footer'>  
                    <button id='seebtn' onClick={handleClose}> Close </button>
                  </Modal.Footer>
                  </div>
                </Modal>
        </div>
    </div>
  )
}

export default Teaminfo
