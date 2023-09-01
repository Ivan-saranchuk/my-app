import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { savePhoto } from "../../redux/profile-reducer";




const Profile = (props) => {
  

    return (
        <div className={s.profile}>
            <ProfileInfo savePhoto={props.savePhoto} 
            isOwner={props.isOwner} 
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus} 
            saveProfile={props.saveProfile}/>

            <MyPostsContainer />
            {/* <MyPosts state={props.state} dispatch={props.dispatch} /> */}
            
        </div>
    )


}


export default Profile;
