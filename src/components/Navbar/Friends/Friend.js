import React from "react";




let Friend = ({ user, followingInProgress, unfollow, follow,  ...props}) => {


    return (
    
    <div>
       
             
                <span>
                
                    <div>
 
                        {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id)}}>
                                
                                UnFollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} 
                            
                            onClick={() => { follow(user.id)}}>
                                
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <div>{user.name}</div><div>{user.status}</div>
                </span>
                <span>
                 

                </span>
            
            
        </div>
        
        
        )

    }

export default Friend;