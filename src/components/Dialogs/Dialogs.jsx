import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from "../../redux/store";
import { sendMessageCreator } from "../../redux/store";
import {Navigate} from "react-router-dom";
import AddMessageForm from "./AddMessageForm";



const Dialogs = (props) => {


let dialogElements = props.path.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

let messagesElements = props.path.messages.map(m  => <Message message={m.message} />);

let newMessageBody = props.path.newMessageBody;


let addNewMessage = (values) => {
   props.sendMessage(values.newMessageBody)
}

if(props.isAuth === false) return <Navigate to = {"/Login"} />


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogElements}
              
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>

            
        </div>
    )


}



export default Dialogs;