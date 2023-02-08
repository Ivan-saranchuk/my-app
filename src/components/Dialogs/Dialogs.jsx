import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from "../../redux/store";
import { sendMessageCreator } from "../../redux/store";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {


let dialogElements = props.path.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

let messagesElements = props.path.messages.map(m  => <Message message={m.message} />);

let newMessageBody = props.path.newMessageBody;

let onSendMessageClick = () => {
    props.sendMessage();
}

let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    
}

if(props.isAuth === false) return <Navigate to = {"/Login"} />


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogElements}
              
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea 
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>

                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

            
        </div>
    )


}

export default Dialogs;