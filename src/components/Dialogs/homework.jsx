import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

let messagesElements = state.messages.map(m  => <Message message={m.message} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogElements}
              
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                   

                   {/* please code there */}
                </div>
            </div>
        </div>
    )


}

export default Dialogs;