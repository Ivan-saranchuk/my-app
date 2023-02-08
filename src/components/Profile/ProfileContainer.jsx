import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



export function withRouter(Children) {
    return (props) => {


        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId)


    }
    render() {

       
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapDispatchToProps = (state) => ({
    profile: state.profileReducer.profile,
   
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);



export default connect(mapDispatchToProps, { getUserProfile })(WithUrlDataContainerComponent);
