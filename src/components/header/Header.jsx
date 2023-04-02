import React from 'react';
import './header.css';
import example from '../../components/images/example.jpg';

function Header() {
  return (
    <div className='rise__header section__padding' id="home">
        <div className='rise__header-content'>
            <h1 className='project__name'> RMIT COMPANION</h1>
            <p>This web-based application is created to help students and parents explore the school infrastructure in a more interactive and information way with a FUN and ENGAGING Website with game and Chatbot features.</p>
            <button type="button">Get Started</button>
        </div>
        <div className='rise__header-image'>
            <img src={example} />
        </div>    
    </div>
  )
}

export default Header