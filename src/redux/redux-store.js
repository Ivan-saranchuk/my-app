import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import {reducer as formReducer} from 'redux-form'


        let reducers = combineReducers({
                profileReducer,
                dialogsReducer,
                sidebarReducer,
                usersReducer,
                authReducer,
                form: formReducer,
                appReducer
        });

        let store = createStore(reducers, applyMiddleware(thunkMiddleware));
        window.store = store;


export default store;



