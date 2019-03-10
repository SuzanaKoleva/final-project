import { 
    ON_ADD_POST_MODAL_OPEN,
    ON_ADD_POST_MODAL_CLOSE 
} from './constants';

const initialState = {
    isModalOpened: false,
    postTypeOpened: '',
    availablePostTypes: {
        photos: {
            label: 'Photos',
            type: 'photos',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNL-CIxhGAonLttT0RTmwkXvBnHyjM6j-6C-7WZbUiy1KNH06S',
        }, 
        text: {
            label: 'Text',
            type: 'text',
            img: 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Aa-icon.png'
        }, 
        quote: {
            label: 'Quote',
            type: 'quote',
            img: 'https://www.freeiconspng.com/uploads/quotes-png-11.png'
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