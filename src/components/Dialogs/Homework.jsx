import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Homework = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = state.messages.map(m => <Message message={m.message} />);

// ============================================================================

// const ON_CHANGE_NEW_MESSAGE_CREATOR = "ON_CHANGE_NEW_MESSAGE_CREATOR";
// const SEND_MESSAGE_DODY_CREATOR = "SEND_MESSAGE_DODY_CREATOR                                                                                                                                         ";

// export let dispatch = (action) => {
//     if (action.type === ON_CHANGE_NEW_MESSAGE_CREATOR){
//         this._state.dialogsPage.newMessageBody = action.body;
//         this._callSubscriber(this_state);
//     }else if(action.type === SEND_MESSAGE_DODY_CREATOR){
//         let body = this._state.dialogsPage.newMessageBody;
//         this._state.dialogsPage.newMessageBody = '';
//         this._state.profilePage.message.push(id: 5, message: body);
//         this._callSubscriber(this_state);
//     }
// }

// export let sendMessageBodyCreator = () => ({type: SEND_MESSAGE_DODY_CREATOR})
// export let onChangeNewMessageCreator = (body) =>({type: ON_CHANGE_NEWM_ESSAGE_CREATOR, body: body})


// // ======================================================


//     let valueNewMessageBody = props.store.newMessageBody;


//     let onChangeNewMessage = (e) => {
//         let body = e.target.value;
//         props.store.dispatch(onChangeNewMessageCreator(body));
//     }

//     let sendMessageBody = () {
//         props.store.dispatch(sendMessageBodyCreator())
//     }


   return (
<div className={s.dialogs}>
 <div className={s.dialogsItems}>
 {dialogElements}

        </div>

         <div className={s.messages}>
               <div>{messagesElements}</div>
              
          </div>
       </div>
    )


 }

export default Homework;


// let dispatch = (action) => {
//     if (action.type === NEW_MESSAGE) {

//     }
// }