import React from 'react';
import { Navbar, Header } from './components';
import {Teaminfo,Rmitbuildings, Display} from './container'

import './App.css';
// 

const App = () => {
  return (
    <div className='App'>
      <div className='blue__bg'>
        <Navbar/>
        <Header/>
      </div>
      
      <div className='teaminfo'>
        <Teaminfo/>
      </div>
      
      <div className='buildings'>
        <Rmitbuildings/>
      </div>
      
      <div className='display'>
        <Display/>
      </div>
    </div>
  )
}

export default App
