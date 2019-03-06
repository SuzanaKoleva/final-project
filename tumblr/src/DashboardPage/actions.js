import { 
    LOAD_POSTS,
    ON_FOLLOW
} from './constants';


export const loadPosts = newPosts => {
    return {
        type: LOAD_POSTS, 
        payload: newPosts
    }
}

export const onFollow = payload => {
    console.log('act', payload)
    return {
        type: ON_FOLLOW, 
        payload
    }
}