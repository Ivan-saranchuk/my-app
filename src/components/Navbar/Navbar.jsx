import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Friends/Friends';
// import StoreContext from "../../redux/StoreContext";


const Navbar = () => {

return ( <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to ="/profile" className={navData=>navData.isActive?s.active:s.item}>Profile</NavLink>
    </div>

    <div className={s.item}>
      <NavLink to= "/dialogs" className={navData=>navData.isActive?s.active:s.item}>Message</NavLink>
    </div>

    <div className={s.item}>
      <NavLink to= "/users" className={navData=>navData.isActive?s.active:s.item}>Users</NavLink>
    </div>

    <Friends /> 
  </nav>
   


)


}



export default Navbar;