import React from 'react';
import { Navbar, Header } from './components';
import {Teaminfo} from './container'

import './App.css';
// 

const App = () => {
  return (
    <div className='App'>
      <div className='blue__bg'>
        <Navbar/>
        <Header/>
      </div>
      <div>
        <Teaminfo/>
      </div>
    </div>
  )
}

export default App
