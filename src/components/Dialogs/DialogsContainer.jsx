import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";


const DialogsContainer = () => {



    return (


        <StoreContext.Consumer>
            {
                (store) => {


                    let state = store.getState().dialogsReducer;


                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }


                    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsReducer={state} />


                }
            }

        </StoreContext.Consumer>
    )


}

export default DialogsContainer;