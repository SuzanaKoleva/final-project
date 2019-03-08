

import { 
    SET_SELECTED_CATEGORY
} from './constants';


export const setSelectedCategory = payload => {

    console.log('act', payload)
    return {
        type: SET_SELECTED_CATEGORY, 
        payload
    }
}

