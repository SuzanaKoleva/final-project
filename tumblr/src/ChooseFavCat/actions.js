import {
    LOAD_CATEGORIES,
    NEW_CATEGORY,
    ADD_ME,
} from './actionTypes';

export const loadCategories = () => {
    return {
        type: LOAD_CATEGORIES,
    }
}

export const addNewCategory = title => {
    return {
        type: NEW_CATEGORY,
        title,
    }
}

