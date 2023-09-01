import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { toggleFollowingProgress } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { follow, unfollow, setCurrentPage  } from "../../redux/users-reducer";
import { getUsers } from "../../redux/users-reducer";
import { getUsersSuper } from "../../redux/users-selectors";



class UsersContainer extends React.Component{

    componentDidMount() {

        let {currentPage, pageSize} = this.props;

        this.props.getUsers(currentPage, pageSize);
       
//         this.props.toggleIsFetching(true);

// usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
//         .then(data => {
//         this.props.toggleIsFetching(false);
//             this.props.setUsers(data.items);
//             this.props.setTotalUsersCount(data.totalCount);
    
//         });
    }
    onPageChanged = (pageNumber) => {


let{pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);

//         this.props.setCurrentPage(pageNumber);
//         this.props.toggleIsFetching(true);

    
// getUsers(this.props.pageNumber, this.props.pageSize)
//         .then(data => {
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(data.items);
//         });
     }
    
        render() {
            return <>
            {this.props.isFetching ? 
            <Preloader /> : null}
           
            <Users totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize} currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged} users={this.props.users} 
            follow={this.props.follow} unfollow={this.props.unfollow} 
            toggleFollowingProgress = {this.props.toggleFollowingProgress} 
            followingInProgress = {this.props.followingInProgress}
            
            />

</>
        }
    }
    

let mapStateToProps = (state) => {
    
  
    return {  
        users: getUsersSuper(state),
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress,
        toggleFollowingProgress: state.usersReducer.toggleFollowingProgress
        
    }
}



export default connect(mapStateToProps, 
    {   follow, 
        unfollow, 
        setCurrentPage,
        toggleFollowingProgress, 
        getUsers
    
    } ) (UsersContainer);