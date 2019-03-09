import { 
    LOAD_POSTS,
} from './constants';


export const loadPosts = newPosts => {
    return {
        type: LOAD_POSTS, 
        payload: newPosts
    }
}


