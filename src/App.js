import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Toggle from './components/Toggle/toggle';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {

  return (


    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar state={props.state}/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />

                    
                      
                     <Route path='/profile' element={<ProfileContainer />}>
                      <Route path=":userId" element={<ProfileContainer />} />
                    </Route> 

          <Route path='/users/*' element={<UsersContainer />} />

          <Route path='/toggle/*' element={<Toggle />} />

          <Route path='/login/*' element={<Login />} />

        </Routes>
      </div>
    </div>


  )
}

export default App;

