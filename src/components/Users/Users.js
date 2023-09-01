import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
        totalUsersCount={totalUsersCount} pageSize={pageSize} />
        
        {users.map(users => <User user={users} key={users.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
        
        }
</div>
}

export default Users;