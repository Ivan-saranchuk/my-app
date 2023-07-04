import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import store from "../../../redux/redux-store";
import { connect } from "react-redux";

// const MyPostsContainer = () => {


//   return (
//     <StoreContext.Consumer>
//       {
//       (state) => {

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }


//         let onPostChange = (newPost) => {
//           store.dispatch(updateNewPostTextActionCreator(newPost));
//         }



//         return <MyPosts updateNewPostText={onPostChange} addPost={addPost} path={state.profileReducer} />
//       }
//     }

//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
      path: state.profileReducer,
      newPostElement: state.profileReducer.newPost
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
  
      addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
