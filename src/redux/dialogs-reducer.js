const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Dima' }
  ],
  messages: [
    { id: 1, message: 'Hi how are you dialogs-reducer', likesCount: 12 },
    { id: 2, message: 'Hi how are you dialogs-reducer', likesCount: 14 },
    { id: 3, message: 'Its my first message dialogs-reducer', likesCount: 16 },
    { id: 4, message: 'its just text dialogs-reducer', likesCount: 18 }
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {
    
    ...state,
  // messages: [...state.messages]
  };
 

  switch (action.type) {

    case SEND_MESSAGE:
      let body = action.newMessageBody;
      
      stateCopy.messages.push({ id: 5, message: body });
      return stateCopy;

    default:
      return state;
  }


}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;