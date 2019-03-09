import {
    SET_USERS_LIST,
    SET_LOGGED_USER_DETAILS,
    ADD_NEW_USER,
    USER_LOGIN,
    USER_LOGOUT,
    CURRENT_USER,
    ON_TOGGLE_LIKE
} from './actionTypes';

export const setUsersList = payload => {
    return {
        type: SET_USERS_LIST,
        payload
    }
}

export const setLoggedUserDetails = payload => {
    return {
        type: SET_LOGGED_USER_DETAILS,
        payload
    }
}

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
    return {
        type: USER_LOGOUT,
    }
}

// export const getCurrentUser = user => {
//     return{
//         type: CURRENT_USER,
//         user,
//     }
// }


export const onLikedAction = payload => {
    console.log('onLikedAction', payload)
    return {
        type: ON_TOGGLE_LIKE,
        payload
    }
}
