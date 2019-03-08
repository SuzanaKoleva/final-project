import { 
    ON_ADD_POST_MODAL_OPEN,
} from './constants';

const initialState = {
    
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ON_ADD_POST_MODAL_OPEN: {

            return {
                ...state,
                postTypeOpened: action.payload.postTypeOpened,
                isModalOpened: true
            };
        }

       

        default: return state;
    }
}

export default reducer;