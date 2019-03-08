import { 
    ADD_NEW_USER, 
    USER_LOGIN,
    USER_LOGOUT,
    CURRENT_USER } from '../actions/actionTypes';

const initialState = {
    users: [
        {
            userId: 1,
            username: 'Pesho',
            email: 'pesho@abv.bg',
            password: 'Pesho123456',
            profileImg: 'https://i.stack.imgur.com/dWrvS.png',
            followed: [],
            categories: [],
            posts: [],
        },
        {
            userId: 2,
            username: 'Tisho',
            email: 'tisho@abv.bg',
            password: 'Tisho1232456',
            profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEu69IK-KF0pmv4pJHHks0OLvFuxcD3tI8ZA0hRSIQ2p_kt4nMw',
            followed: [],
            categories: [],
            posts: [],
        },
    ],
    currentUser: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_USER: 
            // localStorage.setItem('users', JSON.stringify(action.newUser));
            return {...state, users: [...state.users, action.newUser]}
        
        case USER_LOGIN: {
            return (
                {...state, currentUser: action.user}
            )
            // sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            // const isLogged = true;
            // const users = [...state.users];
            // return {...state, users, currentUser: {...state.currentUser, user: action.user, isLogged}};
        } 
        
        case USER_LOGOUT: {
            return (
                {...state, currentUser: null}
            )
        }
        
        // case CURRENT_USER:{
        //     return (
        //         {...state, currentUser: action.user}
        //     )
        // }

        default: return state;
    }
}

export default reducer;