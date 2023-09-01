import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { compose } from "redux";
class HeaderContainer extends React.Component {
  

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

// export default connect(mapStateToProps, {logout}) (HeaderContainer);

export default compose(
    connect(mapStateToProps, {logout})
)(HeaderContainer);