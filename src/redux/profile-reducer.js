import { usersAPI } from "../components/api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
  newMessageBody: "It kamasutra",
profile: null

};

const profileReducer = (state = initialState, action) => {

switch(action.type){
  case ADD_POST: {
    let newPost = {
      id: 5,
      message: state.newMessageBody,
      likesCount: 19
    };

    return {
      ...state,
      messages: [...state.messages, newPost], //Добавляем newPost в messages через спред оператор ...
      newMessageBody: ''
    };
  
  }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newMessageBody: action.newPost
      };
    }

    case SET_USER_PROFILE: {
      return{...state, profile: action.profile}
    }
      default:
        return state;
}
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
           
    dispatch (setUserProfile(response.data));
    
 });
} 

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newPost: text })





export default profileReducer;