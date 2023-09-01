import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";
import { savePhoto } from "../../redux/profile-reducer";
import { saveProfile } from "../../redux/profile-reducer";



export function withRouter(Children) { // HOC который обеспечивает работу withRouter  let { userId } = useParams();
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
      
        this.props.getStatus(userId) //Status
    }

    componentDidMount() {
        
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
        
    }
    
    render() {

       
        return (
            <Profile {...this.props} 
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} 
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
            />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapDispatchToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapDispatchToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile })(WithUrlDataContainerComponent);

