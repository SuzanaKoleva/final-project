import { 
    ON_ADD_POST_MODAL_OPEN,
    ON_ADD_POST_MODAL_CLOSE 
} from './constants';

const initialState = {
    isModalOpened: false,
    postTypeOpened: 'photos',
    availablePostTypes: {
        photos: {
            label: 'Photos',
            img: '',
        }, 
        text: {
            label: 'Text',
            img: ''
        }, 
        quote: {
            label: 'Quote',
            img: ''
        }
    }
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

        case ON_ADD_POST_MODAL_CLOSE: {

            return {
                ...state,
                isModalOpened: false
            };
        }
        

        default: return state;
    }
}

export default reducer;