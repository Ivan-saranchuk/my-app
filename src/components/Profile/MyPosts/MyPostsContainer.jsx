import React from "react";
import { addPostActionCreator } from "../../../redux/store";
import { updateNewPostTextActionCreator } from "../../../redux/store";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  debugger;

  let state = props.state.profileReducer;

   let addPost = () => {
    props.dispatch(addPostActionCreator());
   }
   

   let onPostChange = (newPost) => {
     props.dispatch(updateNewPostTextActionCreator(newPost));
   }
   



   return <MyPosts updateNewPostText={onPostChange} addPost={addPost} profileReducer={state} />
}


export default MyPostsContainer ;
