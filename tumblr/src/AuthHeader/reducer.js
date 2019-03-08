// import { LOAD_POSTS } from './constants';

const initialState = {
   
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        // case LOAD_POSTS: {

        //     return {
        //         ...state,
        //         posts: [...action.payload]
        //     };
        // }

        


        default: return state;
    }
}

export default reducer;