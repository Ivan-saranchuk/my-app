import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';



// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import Toggle from './components/Toggle/toggle';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { withRouter } from './components/Profile/ProfileContainer';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
  componentDidMount() {

    this.props.initializeApp();

  }

  render() {

    if(!this.props.initialized){
      return <Preloader />
    }
    
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          <Suspense fallback={<Preloader />}>

            <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/profile' element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/toggle/*' element={<Toggle />} />
              <Route path='/login/*' element={<Login />} />
            </Routes>

          </Suspense>

        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
})

export default compose(
  withRouter, 
  connect(mapStateToProps, { initializeApp }))(App);

