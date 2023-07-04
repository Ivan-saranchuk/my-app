import { usersAPI } from "../components/api/api";
import { profileAPI } from "../components/api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Dima' }
  ],
  messages: [
    { id: 1, message: 'Hi how are you profile-reducer', likesCount: 12 },
    { id: 2, message: 'Hi how are you profile-reducer', likesCount: 14 },
    { id: 3, message: 'Its my first message profile-reducer', likesCount: 16 },
    { id: 4, message: 'its just textprofile-reducer', likesCount: 18 }
  ],
profile: null,
status: "",

};

const profileReducer = (state = initialState, action) => {

switch(action.type){
  case ADD_POST: {
    let newPost = {
      id: 5,
      message: action.newPostText,
      likesCount: 19
    };

    return {
      ...state,
      messages: [...state.messages, newPost], //Добавляем newPost в messages через спред оператор ...
      newMessageBody: ''
    };
  
  }

    case SET_STATUS:{
      return{
        ...state,
        status: action.status
      }
    }

    case SET_USER_PROFILE: {
      return{...state, profile: action.profile}
    }
      default:
        return state;
}
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getUserProfile = (userId) => async (dispatch) => {

  let response = await usersAPI.getProfile(userId);
    dispatch (setUserProfile(response.data));
} 

export const getStatus = (userId) => async (dispatch) => {
 
  let response = await profileAPI.getStatus(userId);
         
    dispatch (setStatus(response.data));
    
 
} 

export const updateStatus = (status) => async (dispatch) => {
 
  let response = await profileAPI.updateStatus(status);
 
           if(response.data.resultCode === 0){
             dispatch (setStatus(status));
           }
} 







export default profileReducer;