import { createSelector } from "@reduxjs/toolkit";

 const getUsersSelector = (state) => { //«Селектор» — это просто функция, которая принимает состояние Redux 
   return state.usersReducer.users;    // в качестве аргумента и возвращает данные, полученные из этого состояния.
}




export const getUsersSuper = createSelector(getUsersSelector, (users) => { // API createSelector, генерирует кушированную функцию селектор.
    return users.filter(u => true);                                        // createSelector принимает один или несколько «входных» селекторов, 
})                                                                         // которые извлекают значения из аргументов, и «выходной» селектор, 
                                                                           // который получает извлеченные значения и должен возвращать производное значение.