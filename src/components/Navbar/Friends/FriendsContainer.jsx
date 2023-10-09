import React, { useEffect } from "react";
import Friends from "./Friends";
import Preloader from "../../common/Preloader/Preloader";
import { connect } from "react-redux";
import { getUsersSuper } from "../../../redux/users-selectors";
import { getUsers } from "../../../redux/users-reducer";
import { follow, unfollow, setCurrentPage  } from "../../../redux/users-reducer";
import { toggleFollowingProgress } from "../../../redux/users-reducer";


function FriendsContainer ({currentPage, pageSize, getUsers, isFetching, pageNumber, ...props}) {
    debugger;

    useEffect(()=>{
        getUsers(currentPage, pageSize);
    },[currentPage, pageSize])

    let onPageChanged = (pageNumber) => {
        getUsers(pageNumber, pageSize)
     };

    return  <>
    {isFetching ? 
        <Preloader /> : null}
    <Friends users={props.users} onPageChanged={onPageChanged} 
    follow={props.follow} unfollow={props.unfollow} 
    toggleFollowingProgress = {props.toggleFollowingProgress} 
    followingInProgress = {props.followingInProgress}
    totalUsersCount={props.totalUsersCount}
    />
    </>
}

    

let mapStateToProps = (state) => {
    
    return {  
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress,
        toggleFollowingProgress: state.usersReducer.toggleFollowingProgress
        
        
    }
}



export default connect(mapStateToProps, 
    {getUsers,
        follow, 
        unfollow,
        toggleFollowingProgress,
        setCurrentPage
    }) (FriendsContainer);