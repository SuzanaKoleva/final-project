import { 
    SET_SELECTED_CATEGORY_NAME,
    LOAD_POSTS,
    ON_FOLLOW,
    ON_SHARE,
    ON_LIKE,
    ON_REBLOG
} from './constants';

export const setSelectedCategoryNameAction = newCategoryName => {
    return {
        type: SET_SELECTED_CATEGORY_NAME, 
        payload: newCategoryName
    }
}


export const loadPosts = newPosts => {
    return {
        type: LOAD_POSTS, 
        payload: newPosts
    }
}

export const onFollowAction = objectWithPostIndexProp => {
    console.log('act', objectWithPostIndexProp)
    return {
        type: ON_FOLLOW, 
        payload: objectWithPostIndexProp
    }
}

export const onShareAction = objPropIndex => {
    console.log('actionShare', objPropIndex)
    return {
        type: ON_SHARE,
        propsIndex: objPropIndex
    }
}

export const onLikedAction = objPropsIndex => {
    return {
        type: ON_LIKE,
        propsIndex:objPropsIndex
    }
}

export const onReblogAction = objPropsIndex => {
    return {
        type: ON_REBLOG,
        propsIndex: objPropsIndex
    }
}

