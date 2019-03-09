

import { 
    SET_INITIAL_APP_STATE_READY,
    SET_SELECTED_CATEGORY
} from './constants';

export const setInitialAppStateReady = () => {

    return {
        type: SET_INITIAL_APP_STATE_READY
    }
}

export const setSelectedCategory = payload => {

    console.log('act', payload)
    return {
        type: SET_SELECTED_CATEGORY, 
        payload
    }
}

