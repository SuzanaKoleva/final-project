import { USER_LOGIN } from '../actions/actionTypes';
import userStorage from './store';

// let user = JSON.parse(localStorage.getItem('users'));

// const initialState = user ? {loggedIn: true, user} : {};

const initialState = userStorage;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case USER_LOGIN: 
        //     return {  
        //         loggingIn: true,
        //         user: action.user
        //     }
        case USER_LOGIN:
            return {...state, 
                users: state.users.find(user => user.email === action.email && user.password === action.password)}
        default: return state;
    }
}

export default reducer;