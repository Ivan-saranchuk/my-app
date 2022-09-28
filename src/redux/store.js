import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer"


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {

  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you feeling' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' }
      ],

      newPostText: 'it-kamasutra.com',

    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Dima' }
      ],
      messages: [
        { id: 1, message: 'Hi how are you', likesCount: 12 },
        { id: 2, message: 'Hi how are you', likesCount: 14 },
        { id: 3, message: 'Its my first message', likesCount: 16 },
        { id: 4, message: 'its just text', likesCount: 18 }
      ],
      newMessageBody: ""
    },

    sidebar: {
      menu: [
        { link: '/profile', title: 'Profile' },
        { link: '/dialogs', title: 'Message' },
        { link: '/homework', title: 'Homework' }
      ]
    },

  },



  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // dispatch(action) {
  //   this._state.profilePage = profileReducer(this._state.profilePage, action);
  //   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  //   this._state.sidebar = sidebarReducer(this._state.sidebar, action);

  //   this._callSubscriber(this._state);

  // }
}













export default store;