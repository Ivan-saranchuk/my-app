import React from "react";

import s from './Navbar.module.css';
import Friends from "./Friends/Friends";
import Sidebar from "./Sidebar/Sidebar";


const Navbar = (props) => {
 

 let SidebarItem = props.state.sidebarReducer.menu.map(d => <Sidebar link={d.link} title={d.title} />);




  return <nav className={s.nav}>


   {SidebarItem}
    
  <Friends />

  </nav>


}

export default Navbar;