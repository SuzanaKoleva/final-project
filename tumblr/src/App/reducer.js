

import { SET_INITIAL_APP_STATE_READY, SET_SELECTED_CATEGORY, LOG_OUT } from './constants';

const initialState = {

    isInitialAppStateReady: false,
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

        
        case SET_INITIAL_APP_STATE_READY: {
                
            return {
                ...state,
                isInitialAppStateReady: true
            };
        }

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