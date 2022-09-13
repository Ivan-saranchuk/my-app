const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  newMessageBody: "text"
};

const profileReducer = (state = initialState, action) => {


  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newMessageBody,
      likesCount: 19
    };

    state.messages.push(newPost);
    state.newMessageBody = ' ';
   

  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newMessageBody = action.newPost;//action.newText
    

  }

  return state;
}


export default profileReducer;