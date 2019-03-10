import {
    SET_USERS_LIST,
    SET_LOGGED_USER_DETAILS,
    ADD_NEW_USER,
    USER_LOGIN,
    USER_LOGOUT,
    CURRENT_USER,


    ON_TOGGLE_LIKE,
    ON_TOGGLE_FOLLOW
} from '../actions/actionTypes';

const initialState = {
    defaultUsersList: [
        {
            id: 1,
            username: 'Pesho',
            email: 'pesho@abv.bg',
            password: 'Pesho123456',
            profileImg: 'https://i.stack.imgur.com/dWrvS.png',
            likedPosts: {
                1: {},
                4: {},
            },

            followedPost: {
                1: {},
            }






            // followed: [],
            // categories: [],
            // posts: [],
        },
        {
            id: 2,
            username: 'Tisho',
            email: 'tisho@abv.bg',
            password: 'Tisho1232456',
            profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEu69IK-KF0pmv4pJHHks0OLvFuxcD3tI8ZA0hRSIQ2p_kt4nMw',
            likedPosts: {
                2: {},
                3: {},
            },
            followedPost: {
                1: {},
            }


            // followed: [],
            // categories: [],
            // posts: [],
        },
    ],
    users: [

    ],
    currentUser: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_LIST:

            const usersList = action.payload ?
                action.payload : state.defaultUsersList;

            return {
                ...state,
                users: [...usersList]
            };


        case SET_LOGGED_USER_DETAILS:

            return {
                ...state,
                currentUser: action.payload ?
                    { ...action.payload } : null
            };

        case ADD_NEW_USER:
            // localStorage.setItem('users', JSON.stringify(action.newUser));
            return { ...state, users: [...state.users, action.newUser] }

        case USER_LOGIN: {
            return (
                { ...state, currentUser: action.user }
            )
            // sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            // const isLogged = true;
            // const users = [...state.users];
            // return {...state, users, currentUser: {...state.currentUser, user: action.user, isLogged}};
        }

        case USER_LOGOUT: {
            return (
                { ...state, currentUser: null }
            )
        }

        // case CURRENT_USER:{
        //     return (
        //         {...state, currentUser: action.user}
        //     )
        // }

        case ON_TOGGLE_LIKE: {
            

            const postId = action.payload;
            console.log(postId)
            const currentIsLikedState = state.currentUser.likedPosts[postId];
            console.log(currentIsLikedState)

            const newLikedPosts = { 
                ...state.currentUser.likedPosts,
                [postId]: currentIsLikedState ? false : {}
            };

            const updatedUser = {
                ...state.currentUser,
                likedPosts: newLikedPosts
            };

            let userIndex = 0;

            for (var i = 0; i < state.users.length; i++) {

                if (state.users[i].id === state.currentUser.id) {

                    userIndex = i;
                    break;
                }
            }

            const updatedUsers = [...state.users];
            updatedUsers.splice(userIndex, 1, updatedUser)

            return {
                ...state,
                currentUser: updatedUser,
                users: updatedUsers
            }
        }  



          case ON_TOGGLE_FOLLOW: {
            console.log('follow reducer', action.payload)
    
            const postId = action.payload;
            console.log(postId)
            const currentIsFollowState = state.currentUser.followedPost[postId];
            console.log(state.currentUser.followedPost)
            
            const newFollowedPost = { 
                ...state.currentUser.followedPost,
                [postId]: currentIsFollowState ? false : {}
            };
    
            const updatedUser = {
                ...state.currentUser,
                followedPost: newFollowedPost
            };
    

            // Simulate BE updating the users list 
            let userIndex = 0;
    
            for (var i = 0; i < state.users.length; i++) {
    
                if (state.users[i].id === state.currentUser.id) {
    
                    userIndex = i;
                    break;
                }
            }
            
            const updatedUsers = [...state.users];
            updatedUsers.splice(userIndex, 1, updatedUser)

            return {
                ...state,
                currentUser: updatedUser,
                users: updatedUsers
            }
        }

        default: return state;
    }

}

export default reducer;