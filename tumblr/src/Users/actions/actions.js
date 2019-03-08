import { 
    ADD_NEW_USER, 
    USER_LOGIN,
    USER_LOGOUT,
    CURRENT_USER } from './actionTypes';


export const addNewUser = newUser => {
    return {
        type: ADD_NEW_USER, 
        newUser
    }
}

export const onLogin = user => {
    return {
        type: USER_LOGIN,
        user
    }
}

export const logOutUser = () => {
    return{
        type: USER_LOGOUT,
    }
}

// export const getCurrentUser = user => {
//     return{
//         type: CURRENT_USER,
//         user,
//     }
// }