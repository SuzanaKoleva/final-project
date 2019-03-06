import {
    LOAD_CATEGORIES,
    NEW_CATEGORY,
} from './actionTypes';

export const loadCategories = () => {
    return {
        type: LOAD_CATEGORIES,
    }
}

export const addNewCategory = newCategory => {
    return {
        type: NEW_CATEGORY,
        newCategory,
    }
}