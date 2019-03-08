

import { SET_SELECTED_CATEGORY } from './constants';

const initialState = {

    categoryOptions: {
        pets: {
            name: 'pets'
        }, 
        travel: {
            name: 'travel'
        }, 
        sports: {
            name: 'sports'
        }, 
        beauty: {
            name: 'beauty'
        }, 
        home: {
            name: 'home'
        }
    },
    selectedCategory: '',
    defaultCategory: {
        travel: {
            name: 'travel'
        }, 
    }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SELECTED_CATEGORY: {

            const newSelectedCategory = state.categoryOptions[action.payload] ?
                state.categoryOptions[action.payload].name : state.defaultCategory;
                
            return {
                ...state,
                selectedCategory: newSelectedCategory
            };
        }

        default: return state;
    }
}

export default reducer;