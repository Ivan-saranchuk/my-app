import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { reset } from 'redux-form';

const MyPosts = (props) => {

    let postsElements = props.path.messages.map( p => <Post key={p.id} message={p.message} likesCount = {p.likesCount}  />)
    let newPostElement = props.path.newMessageBody;


   let onAddPost = (values, dispatch) => {
      props.addPost(values.newPostText);
      dispatch(reset("ProfileAddNewPostForm"));
   }
   
   return (
 
      <div className={s.postsBlock}>
         <h3>My MyPosts</h3>

         <AddNewPostFormRedux onSubmit={onAddPost} />
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
   return(
      <form onSubmit={props.handleSubmit}>
      <div>
         <Field name="newPostText" component={Textarea} placeholder={"Post message"} 
         
         validate={[required, maxLength10]} types="input"/>
      </div>

      <div>
         <button>Add post</button>
      </div>
   </form>
   )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
