import { ADD_NEW_USER } from '../actions/actionTypes';

const initialState =  {
    users: [
        {id: 1, username: 'Gosho', email: 'gosho@user.com', password: '123456' },
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_USER: {
            return {...state, users: [...state.users, action.user]};
        }
        default: return state;
    }
}

export default reducer;