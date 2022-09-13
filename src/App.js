import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";






const App = (props) => {

  return (
   

      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state}/>
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/dialogs/*' element={<Dialogs state={props.state} dispatch={props.dispatch}/>} /> 
            
          <Route path='/profile/*' element={<Profile state={props.state} dispatch={props.dispatch} />} /> 
          
          </Routes>
        </div>
      </div>

    
  )
}

export default App;

