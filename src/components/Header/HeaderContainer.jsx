import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { getAuthUsersData } from "../../redux/auth-reducer";
import { authAPI, getUsers2 } from "../api/api";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect(mapStateToProps, {logout}) (HeaderContainer);