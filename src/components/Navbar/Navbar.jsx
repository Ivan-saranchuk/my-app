import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';


const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
    </div>

    <div className={s.item}>
      <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
    </div>

    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.friends}>
      <h2>Friends</h2>
      
       <div><img src = 'https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Andrew</div>
       <div><img src = 'https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Sasha</div>
       <div><img src = 'https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Sveta</div>
      

    </div>

  </nav>


}

export default Navbar;