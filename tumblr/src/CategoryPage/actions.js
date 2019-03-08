import { 
    LOAD_POSTS,
    ON_FOLLOW,
    ON_SHARE,
    ON_LIKE,
    ON_REBLOG,
    ADD_POST_TO_CATEGORY
} from './constants';


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
        payload: objPropIndex
    }
}

export const onLikedAction = objpayload => {
    return {
        type: ON_LIKE,
        payload:objpayload
    }
}

export const onReblogAction = objpayload => {
    return {
        type: ON_REBLOG,
        payload: objpayload
    }
}

export const addPostToCategory = payload => {
    return {
        type: ADD_POST_TO_CATEGORY,
        payload
    }
}

