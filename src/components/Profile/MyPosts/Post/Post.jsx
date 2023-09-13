import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
    <div className={s.item}>
       <img src = 'https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>
        {props.message}
        <div>
          <span>like</span>
        </div>
        
    </div>
    
   )
}


export default Post;
