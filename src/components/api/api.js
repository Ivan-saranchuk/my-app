import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "bea12964-fc98-481d-a7c7-dc76f9198bda"
    }


});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}}`)
        .then(response => {
            return response.data;
        });
    },

    follow(userId){
      return instance.post(`follow/${userId}`)
    },

    unfollow(userId){
       return instance.delete(`follow/${userId}`)
    },

    getProfile(userId){
        return instance.get(`profile/`+ userId);
       
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}

    // export const getUsers = (currentPage = 1, pageSize = 10) => {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}}`)
    //     .then(response => {
    //         return response.data;
    //     });
    // }





export const getUsers2 = () => {
    return instance.get(`auth/me}`,
    ).then(response => response.data);
}

