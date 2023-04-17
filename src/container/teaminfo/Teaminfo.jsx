import React from 'react'
import './teaminfo.css'
import Hao from '../../components/images/Hao.png';
import Ngoc from '../../components/images/Ngoc.png';
import Thach from '../../components/images/Thach.png';
import Quan from '../../components/images/Quan.png';
import Facebook from '../../components/images/facebook.png';
import Instagram from '../../components/images/instagram.png';
import Linkedin from '../../components/images/linkedin.png';
function teaminfo() {
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
        
        <div className='rise__teaminfo_member_section'>
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
              <img src={Facebook} alt='facebook'/>             
              <img src={Instagram} alt='instagram'/>                            
              <img src={Linkedin} alt='linkedin'/>
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
              <img src={Facebook} alt='facebook'/>             
              <img src={Instagram} alt='instagram'/>                            
              <img src={Linkedin} alt='linkedin'/>
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
              <img src={Facebook} alt='facebook'/>             
              <img src={Instagram} alt='instagram'/>                            
              <img src={Linkedin} alt='linkedin'/>
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
              <img src={Facebook} alt='facebook'/>             
              <img src={Instagram} alt='instagram'/>                            
              <img src={Linkedin} alt='linkedin'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default teaminfo
