import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import { unfollowAC } from "../../redux/users-reducer";
import { setUsersAC } from "../../redux/users-reducer";
import { setCurrentPageAC } from "../../redux/users-reducer";
import { setUsersTotalCountAC } from "../../redux/users-reducer";
import { toggleFollowingProgress } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching  } from "../../redux/users-reducer";
import { usersAPI } from "../api/api";
import { getUsers } from "../../redux/users-reducer";



class UsersContainer extends React.Component{

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
       
//         this.props.toggleIsFetching(true);

// usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
//         .then(data => {
//         this.props.toggleIsFetching(false);
//             this.props.setUsers(data.items);
//             this.props.setTotalUsersCount(data.totalCount);
    
//         });
    }
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

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
            followingInProgress = {this.props.followingInProgress}/>

</>
        }
    }
    

let mapStateToProps = (state) => {
    
  
    return {  
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
        
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },

//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },

//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },

//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },

//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, 
    {follow, 
        unfollow, 
        setCurrentPage, 
        toggleFollowingProgress, getUsers} ) (UsersContainer);