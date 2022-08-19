// let rerenderEntireTree = () => {
//   console.log('State changed');
// }

// let state = {

//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hi' },
//       { id: 2, message: 'How are you feeling' },
//       { id: 3, message: 'Yo' },
//       { id: 4, message: 'Yo' }
//     ],

//     newPostText: 'it-kamasutra.com',

//   },

//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: 'Dimych' },
//       { id: 2, name: 'Andrey' },
//       { id: 3, name: 'Sveta' },
//       { id: 4, name: 'Dima' }
//     ],
//     messages: [
//       { id: 1, message: 'Hi how are you', likesCount: 12 },
//       { id: 2, message: 'Hi how are you', likesCount: 14 },
//       { id: 3, message: 'Its my first message', likesCount: 16 },
//       { id: 4, message: 'its just text', likesCount: 18 }
//     ]

//   },

//   sidebar: {
//     menu: [
//       { link: '/profile', title: 'Profile' },
//       { link: '/dialogs', title: 'Message' },
//     ]
//   }

// }


// export let addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   };

//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = ' ';
//   rerenderEntireTree(state);
// }

// export let updateNewPostText = (newText) => {

//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }

// export default state;

// ==================================================
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

// ==================================================

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

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ' ';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push({ id: 5, message: body });
        this._callSubscriber(this._state);

    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;