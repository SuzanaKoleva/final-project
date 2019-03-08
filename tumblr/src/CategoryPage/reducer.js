import { 
    SET_SELECTED_CATEGORY_NAME, 
    LOAD_POSTS, 
    ON_FOLLOW, 
    ON_SHARE, 
    ON_LIKE, 
    ON_REBLOG,
    ADD_POST_TO_CATEGORY
} from './constants';

const initialState = {

    categories: {

        travel: {
            posts: [
                {

                    title: 'Flight',
                    imgSrc: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['flying', 'air', 'airplane'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    userName: 'Gosho',
                    postedFromUserId: 1,

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
                    title: 'Pets',
                    imgSrc: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
                    description: 'I am a dog',
                    category: 'Pets',
                    tags: ['bark', 'jump', 'fluffy'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    userName: 'Armin',
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
                    title: 'voleyball ',
                    imgSrc: 'https://www.freepngimg.com/thumb/volleyball/5-2-volleyball-png-clipart-thumb.png',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['a', 'b', 'c'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    userName: 'Gosho',
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
                    title: 'Flight',
                    imgSrc: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi6tP3Bie7gAhWG16QKHZTMBjMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.travelmarketreport.com%2Farticles%2FHeres-Why-You-Should-Use-A-Travel-Agent-Instead-Of-Booking-Online&psig=AOvVaw1Fqwz7fFv1khpiQ76saGYe&ust=1551980893481517',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['a', 'b', 'c'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    userName: 'Gosho',
                    postedFromUserId: 1,

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
                    title: 'Flight',
                    imgSrc: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi6tP3Bie7gAhWG16QKHZTMBjMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.travelmarketreport.com%2Farticles%2FHeres-Why-You-Should-Use-A-Travel-Agent-Instead-Of-Booking-Online&psig=AOvVaw1Fqwz7fFv1khpiQ76saGYe&ust=1551980893481517',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['a', 'b', 'c'],

                    userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                    userName: 'Gosho',
                    postedFromUserId: 1,

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

            const { postData } = action.payload;

            const newPost = {

                title: postData.title,
                imgSrc: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
                description: postData.description,
                category: categoryType,
                tags: postData.tags,

                userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
                userName: 'Gosho',
                postedFromUserId: 1,

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

        case ON_LIKE: {
            console.log(111111111111111111)
            console.log(state.categories[state.selectedCategory].posts[action.payload.postIndex])
            console.log(state.categories[state.selectedCategory].posts[0])
           
            const currentPost = state.categories[state.selectedCategory].posts[action.payload.postIndex];

            const currentIsLiked = currentPost.isLiked;
            console.log(currentIsLiked + '11111111111111' )
            const updatedPost = {
                ...currentPost,
                isLiked: !currentIsLiked,
                // !currentIsLiked,
            }
            
            console.log(updatedPost)
            
            if (updatedPost.isLiked) {
                updatedPost.backgroundColor = 'blue'

            } else {
                updatedPost.backgroundColor = 'red'
            }

            const updatedPosts = [...state.categories[state.selectedCategory].posts];
            
            updatedPosts.splice(action.payload.postIndex, 1, updatedPost);
            
            const updatedCategories = {

                ...state.categories,
                [state.selectedCategory]: {

                    ...[state.selectedCategory],
                    posts: updatedPosts
                }
            }

            return {
                ...state,

                categories: updatedCategories
            }
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