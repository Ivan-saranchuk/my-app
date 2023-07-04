import { createSelector } from "@reduxjs/toolkit";

 const getUsersSelector = (state) => {
   return state.usersReducer.users;
}




export const getUsersSuper = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})