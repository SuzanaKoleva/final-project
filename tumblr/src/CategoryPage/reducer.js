import { 
    SET_CATEGORIES_DATA,
    LOAD_POSTS, 
    ON_FOLLOW, 
    ON_SHARE, 
    ON_REBLOG,
    ADD_POST_TO_CATEGORY
} from './constants';

const initialState = {

    categories: {

        travel: {
            posts: [
                {

                    id: 1,
                    title: 'Flight',
                    imgSrc: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['flying', 'air', 'airplane'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    username: 'Service post from Tisho',
                    postedFromUserId: 2,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,

                }
            ]
        },
        pets: {
            posts: [
                {
                    id: 2,
                    title: 'Pets',
                    imgSrc: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
                    description: 'I am a dog',
                    category: 'Pets',
                    tags: ['bark', 'jump', 'fluffy'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    username: 'Service post from Pesho',
                    postedFromUserId: 1,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                }
            ]
        },
        sports: {
            posts: [
                {
                    id: 3,
                    title: 'Voleyball ',
                    imgSrc: 'https://www.freepngimg.com/thumb/volleyball/5-2-volleyball-png-clipart-thumb.png',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['a', 'b', 'c'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    username: 'Service post from Pesho',
                    postedFromUserId: 1,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                }
            ]
        },
        home: {
            posts: [
                {
                    id: 4,
                    title: 'Home accessories',
                    imgSrc: 'http://www.eneserarslan.com/wp-content/uploads/2018/10/home-accessories-candles-1-JsGnDl.jpg',
                    description: 'accessories',
                    category: 'Home',
                    tags: ['a', 'b', 'c'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    username: 'Service post from Tisho',
                    postedFromUserId: 2,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                }
            ]
        },
        beauty: {
            posts: [
                {
                    id: 5,
                    title: 'beauty things',
                    imgSrc: 'https://scstylecaster.files.wordpress.com/2016/12/beauty-blogger-flat-lay.png',
                    description: 'I am flying',
                    category: 'things',
                    tags: ['a', 'b', 'c'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    username: 'Service post from Tisho',
                    postedFromUserId: 2,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                }
            ]
        },
    },
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        
        case SET_CATEGORIES_DATA: {

            return {
                ...state,
                categories: action.payload ? { ...action.payload } : state.categories
            };
        }

        case LOAD_POSTS: {

            return {
                ...state,
                posts: [...action.payload]
            };
        }

        case ADD_POST_TO_CATEGORY: {
console.log(action.payload)
            const categoryType = action.payload.categoryType;


            const updatedCategoryPosts = [...state.categories[categoryType].posts];

            const { postData, userData } = action.payload;

            const newPost = {

                title: postData.title,
                imgSrc: postData.imgSrc || '',
                quote: postData.quote || '',
                description: postData.description,
                category: categoryType,
                tags: postData.tags,

                userImgSrc: userData.userImgSrc,
                username: userData.username,
                postedFromUserId: userData.postedFromUserId,

                isPosterFollowed: false,
                isShare: false,
                isLiked: false,
                isRebloged: false,

            };

            updatedCategoryPosts.push(newPost);

            const updatedCategories = {
                ...state.categories,
                [categoryType]: {
                    ...state.categories[categoryType],
                    posts: updatedCategoryPosts
                }
            };

            return {
                ...state,
                categories: updatedCategories
            };
        }
        
        




        case ON_FOLLOW: {

            const currentinFollowed = state.posts[action.payload.postIndex].isPosterFollowed;
            
            const updatedPost = {

                ...state.posts[action.payload.postIndex],
                isPosterFollowed: !currentinFollowed
            };

            const updatedPosts = [...state.posts];



            updatedPosts.splice(action.payload.postIndex, 1, updatedPost);

            return {
                ...state,
                posts: updatedPosts
            };
        }
        case ON_SHARE: {
            // console.log(11111111111, state.posts[action.payload.postIndex].isShare);



            const currentIsShared = state.posts[action.payload.postIndex].isShare;
            
            const updatedPost = {
                ...state.posts[action.payload.postIndex],
                isShare: !currentIsShared,


            }
           
            const updatedPosts = [...state.posts];

            updatedPosts.splice(action.payload.postIndex, 1, updatedPost);

            return {
                ...state,
                posts: updatedPosts
            };
        }


        case ON_REBLOG: {
           
            const currentisRebloged = state.posts[action.payload.postIndex].isRebloged;
            
         
            const updatePost = { ...state.posts[action.payload.postIndex], isRebloged: !currentisRebloged }

            const updatedPosts = [...state.posts];

            updatedPosts.splice(action.payload.postIndex, 1, updatePost);

            return {
                ...state,
                posts: updatedPosts
            }
        }





        default: return state;
    }
}

export default reducer;