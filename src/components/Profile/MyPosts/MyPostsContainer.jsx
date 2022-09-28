import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/StoreContext";

const MyPostsContainer = (props) => {
 

   return (


     <StoreContext.Consumer>
       {
         (state) => {
         

           let state = state.profileReducer;

           let addPost = () => {
             store.dispatch(addPostActionCreator());
           }


           let onPostChange = (newPost) => {
             store.dispatch(updateNewPostTextActionCreator(newPost));
            }

             return <MyPosts updateNewPostText={onPostChange} addPost={addPost} profileReducer={state} />
            
          }
        }
      </StoreContext.Consumer>

   )
}

export default MyPostsContainer ;
