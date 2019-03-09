import { LOAD_CATEGORIES, NEW_CATEGORY} from './actionTypes';

const initialState = {
    categories: [
        {
            id: 1,
            title: 'Sport', 
            // followers: 0,
            image: 'https://guardian.ng/wp-content/uploads/2016/06/Sports.jpg',
            isAdded: false,
        },
        {
            id: 2,
            title: 'Auto', 
            // followers: 0,
            image: 'https://robbreportedit.files.wordpress.com/2014/10/1a_mclaren_p11.jpg?w=590',
            isAdded: false,
        },
        {
            id: 3,
            title: 'Tourism', 
            // followers: 0,
            image: 'https://static1.squarespace.com/static/5b0eb59df793928fa7f488ff/t/5b9968ff8985830bc3de7af9/1536780566536/Industryyyy.jpg',
            isAdded: false,
        },
        {
            id: 4,
            title: 'Fashion', 
            // followers: 0,
            image: 'https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10554.jpg?size=626&ext=jpg',
            isAdded: false,
        },
        {
            id: 5,
            title: 'Food', 
            // followers: 0,
            image: 'https://www.incimages.com/uploaded_files/image/970x450/getty_855098134_353411.jpg',
            isAdded: false,
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CATEGORIES: 
            return {...state};
        case NEW_CATEGORY:
            return {...state, categories: state.categories.filter(c => c.title === action.title)};
        
        default: return state;
    }
}

export default reducer;