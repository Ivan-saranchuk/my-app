import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

