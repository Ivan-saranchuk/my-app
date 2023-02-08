import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapDispatchToPropsForRedirect = (state) => ({
    isAuth: state.authReducer.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if(this.props.isAuth === false) return <Navigate to = {"/Login"} />
            return <Component {...this.props} />
        }
    }


    
   let  ConnectedAuthRedirectComponent = connect(mapDispatchToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}