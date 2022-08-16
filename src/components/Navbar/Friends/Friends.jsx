import React from "react";
import s from './Friends.module.css';

const Friends = () => {
    return (
        <div className={s.friends}>
            <h2>Friends</h2>

            <div><img src='https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Andrew</div>
            <div><img src='https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Sasha</div>
            <div><img src='https://media.kg-portal.ru/production/avatar2/avatar2_49.jpg'></img>Sveta</div>


        </div>
    )
}

export default Friends;