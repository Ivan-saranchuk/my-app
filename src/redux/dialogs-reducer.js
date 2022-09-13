const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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

const dialogsReducer = (state=initialState, action) => {
  

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
        
  
      } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({ id: 5, message: body });
       
  
      }
      return state;
    }
   
export default dialogsReducer;