import { LOAD_POSTS, ON_FOLLOW, ON_SHARE, ON_REBLOG } from './constants';

const initialState = {
    
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_POSTS: {

            return {
                ...state,
                posts: [...action.payload]
            };
        }


        default: return state;
    }
}

export default reducer;