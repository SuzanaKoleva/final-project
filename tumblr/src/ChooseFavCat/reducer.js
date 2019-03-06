import { LOAD_CATEGORIES, NEW_CATEGORY } from './actionTypes';

const initialState = {
    categories: [
        {
            id: 1,
            title: 'Sport', 
            followers: 0,
            image: 'https://s3-ap-southeast-2.amazonaws.com/2ser-wordpress/wp-content/aws/uploads/2017/12/28031943/academysport.jpg',
        },
        {
            id: 2,
            title: 'Auto', 
            followers: 0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW94MYNx8n3uKKy0wzIHSjAKTEnfLXGBPsJ68TXe7QvzxGZ0wF',
        },
        {
            id: 3,
            title: 'Tourism', 
            followers: 0,
            image: 'https://static1.squarespace.com/static/5b0eb59df793928fa7f488ff/t/5b9968ff8985830bc3de7af9/1536780566536/Industryyyy.jpg',
        },
        {
            id: 4,
            title: 'Fashion', 
            followers: 0,
            image: 'https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10554.jpg?size=626&ext=jpg',
        },
        {
            id: 5,
            title: 'Food', 
            followers: 0,
            image: 'https://www.incimages.com/uploaded_files/image/970x450/getty_855098134_353411.jpg',
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CATEGORIES: 
            return {...state};
        case NEW_CATEGORY:
            return {...state, ctaegories: [...state.categories, action.newCategory]};
        default: return state;
    }
}

export default reducer;