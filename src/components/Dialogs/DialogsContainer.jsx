import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from "../../redux/store";
import { sendMessageCreator } from "../../redux/store";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

 
    let state = props.state.dialogsReducer;


let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
}

let onNewMessageChange = (body) => { 
    props.dispatch(updateNewMessageBodyCreator(body));
}



    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsReducer={state}/>


}

export default DialogsContainer;