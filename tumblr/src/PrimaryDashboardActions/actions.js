import { 
    ON_ADD_POST_MODAL_OPEN,
    ON_ADD_POST_MODAL_CLOSE
} from './constants';


export const onAddPostModalOpen = payload => {

    return {
        type: ON_ADD_POST_MODAL_OPEN, 
        payload
    }
}

export const onAddPostModalClose = payload => {
    
    console.log(234)
    return {
        type: ON_ADD_POST_MODAL_CLOSE
    }
}
