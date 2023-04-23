import {React} from 'react';
import { TypeAnimation } from 'react-type-animation';
import './header.css';
import shield from '../../components/images/shieldlogo.png';
function Header() {
  return (
    
    <div className='rise__header section__padding' id="home">
        <div className='rise__header-content' >
            <h1> <div className='bold_RMIT'>RMIT</div> COMPANION</h1>
            <p>This web-based application is created to help students and parents explore the school infrastructure in a more interactive and information way with a FUN and ENGAGING Website with&nbsp; 
            <TypeAnimation
        sequence={[
          'Game', 
          1000, 
          'Game and', 
          1050, 
          'Game and Chatbot', 
          1100,
          'Game and Chatbot feartures.',
          1150,
          '',
          () => {
            console.log('Sequence completed'); 
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        // style={{ fontSize: '2em', display: 'inline-block' }}
      />
            </p>
            <button type="button">Get Started</button>
        </div>
        <div className='rise__header-image'>
            <img src={shield} />
        </div>    
    </div>
  )
}



export default Header