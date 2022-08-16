import React from "react";
import s from './Sidebar.module.css';
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {

    
    
   
    return <div><div className={s.item}>
        <NavLink to={props.link} className={navData => navData.isActive ? s.active : s.item}>{props.title}</NavLink>
    </div>

      

</div>
    
}

export default Sidebar;