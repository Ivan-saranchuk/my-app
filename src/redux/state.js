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

let store = {

  _callSubscriber() {
    console.log('State changed');
  },

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
        ]

    },

    sidebar: {
      menu: [
        { link: '/profile', title: 'Profile' },
        { link: '/dialogs', title: 'Message' },
      ]
    }

  },


  getState(){
      return this._state; 
    },

  // addPost() {
  // },

  

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ' ';
      this._callSubscriber(this._state);

    } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
 
  return{
     type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return{
     type: 'UPDATE-NEW-POST-TEXT', newText: text
  }
}

export default store;