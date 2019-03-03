import { 
    ADD_NEW_USER, 
    USER_LOGIN } from './actionTypes';


export const addNewUser = user => {
    return {
        type: ADD_NEW_USER, 
        user
    }
}

export const onLogin = (email, password) => {
    return {
        type: USER_LOGIN,
        email,
        password,
    }
}