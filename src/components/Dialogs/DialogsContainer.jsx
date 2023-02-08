import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import store from "../../redux/redux-store";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//             (state) => {
//   ;
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }

//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }

//                 return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} path={state.dialogsReducer} />
//             }
// }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        path: state.dialogsReducer,
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

