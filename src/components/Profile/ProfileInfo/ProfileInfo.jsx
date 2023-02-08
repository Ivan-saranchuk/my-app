import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profile ){
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://static-cse.canva.com/blob/847064/29.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} /><br/>
                <div>
                    {props.profile.fullName}
                </div>
                
                <div>
                    {props.profile.aboutMe}
                </div>

                
                ava + description
            </div>

        </div>
    )


}


export default ProfileInfo;
