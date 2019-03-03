import { ADD_NEW_USER } from '../actions/actionTypes';

const initialState =  {};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_USER: {
            return {...state, users: [...state.users, action.user]};
        }
        default: return state;
    }
}

export default reducer;