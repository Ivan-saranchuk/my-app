import React from "react";

import s from './Navbar.module.css';
import Friends from "./Friends/Friends";
import Sidebar from "./Sidebar/Sidebar";
import StoreContext from "../../redux/StoreContext";


const Navbar = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          
          let SidebarItem = store.sidebarReducer.menu.map(d => <Sidebar link={d.link} title={d.title} />);

        return  {SidebarItem}
           
        
        
         
        }

      }
  
   </StoreContext.Consumer>
  )
  
 


}

export default Navbar;