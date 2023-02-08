import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from "../../../redux/store";
import { updateNewPostTextActionCreator } from "../../../redux/store";


const MyPosts = (props) => {

    let postsElements = props.path.messages.map( p => <Post message={p.message} likesCount = {p.likesCount}  />)
    let newPostElement = props.path.newMessageBody;


   let addPost = () => {
      props.addPost();
   //  props.dispatch(addPostActionCreator());
   }
   

   let onPostChange = (e) => {
      let newPost = e.target.value;
      props.updateNewPostText(newPost);
   //    let newPost = e.target.value;
   //   props.dispatch(updateNewPostTextActionCreator(newPost));
   }
   
   return (
 
   <div className={s.postsBlock}>
   <h3>My MyPosts</h3> 
         <div>
            <div>
               <textarea onChange={onPostChange} value={newPostElement}/>
            </div>

            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
   </div>
   )
}


export default MyPosts;
