import { USER_LOGIN } from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {loggedIn: true, user} : {};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN: 
            return {  
                loggingIn: true,
                user: action.user
            }
        default: return state;
    }
}

export default reducer;