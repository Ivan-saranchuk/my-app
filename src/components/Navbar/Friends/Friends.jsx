import React from "react";
import s from './Friends.module.css';
// import Friend from "./Friend";

const Friends = ({users, followingInProgress, follow, unfollow, ...props}) => {
    return (
        <div className={s.friends}>
            <h2>Friends</h2>

            {/* <div><img src='https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Andrew</div> */}
            
            <div><img src='https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Sveta</div>
            {users.map(users => users.followed ? <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => { unfollow(users.id)}}>
                                
                                UnFollow</button>
                            : <button disabled={followingInProgress.some(id => id === users.id)} 
                            
                            onClick={() => { follow(users.id)}}>
                                
                                Follow</button>)}

        </div>
    )
}

export default Friends;