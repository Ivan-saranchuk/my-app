import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://static-cse.canva.com/blob/847064/29.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )


}


export default ProfileInfo;
