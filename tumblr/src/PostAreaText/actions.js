import { 
    ON_ADD_POST_MODAL_OPEN,
} from './constants';


export const onAddPostModalOpen = payload => {
    console.log(222, payload)
    return {
        type: ON_ADD_POST_MODAL_OPEN, 
        payload
    }
}
