import { SET_SELECTED_CATEGORY_NAME, LOAD_POSTS, ON_FOLLOW, ON_SHARE, ON_LIKE, ON_REBLOG } from './constants';

const initialState = {
    categories: {

        travel: {
            posts: [
                {

                    title: 'Flight',
                    imgSrc: 'data:image/jpeg;base64,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',
                    discription: 'I am flying',
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
                    discription: 'I am a dog',
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
                    title: 'Flight',
                    imgSrc: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi6tP3Bie7gAhWG16QKHZTMBjMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.travelmarketreport.com%2Farticles%2FHeres-Why-You-Should-Use-A-Travel-Agent-Instead-Of-Booking-Online&psig=AOvVaw1Fqwz7fFv1khpiQ76saGYe&ust=1551980893481517',
                    discription: 'I am flying',
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
                    discription: 'I am flying',
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
                    discription: 'I am flying',
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

    availableCategories: {

        travel: {
            isActive: true,
            name:  'travel'
        },
        pets: {
            isActive: true,
            name:   'pets'          
        },
        sports: {
            isActive: true,
            name: 'sports'
        },
        home: {
            isActive: true,
            name: 'home'
        },
        beauty: {
            isActive: true,
            name: 'beauty'
        },
    },
    
    defaultCategory: {
        isActive: true,
        name: 'travel'
    },
    

    selectedCategory: 'travel'
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SELECTED_CATEGORY_NAME: {
            
            const newSelectedCategory = state.availableCategories[action.payload] ? 
                state.availableCategories[action.payload].name : state.defaultCategory.name;

            return {
                ...state,
                selectedCategory: newSelectedCategory
            };
        }

        case LOAD_POSTS: {

            return {
                ...state,
                posts: [...action.payload]
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
            console.log(11111111111, state.posts[action.propsIndex.postIndex].isShare);



            const currentIsShared = state.posts[action.propsIndex.postIndex].isShare;


            console.log(2222222222222222222, state.posts[action.propsIndex.postIndex].isShare)
            const updatedPost = {
                ...state.posts[action.propsIndex.postIndex],
                isShare: !currentIsShared,


            }
            console.log(state.posts[action.propsIndex.postIndex].backgroundColor)
            const updatedPosts = [...state.posts];

            updatedPosts.splice(action.propsIndex.postIndex, 1, updatedPost);

            return {
                ...state,
                posts: updatedPosts
            };
        }
        case ON_LIKE: {
            console.log(22222222, state.posts[action.propsIndex.postIndex].backgroundColor)
            const currentIsLiked = state.posts[action.propsIndex.postIndex].isLiked;

            const updatedPost = {
                ...state.posts[action.propsIndex.postIndex],
                isLiked: !currentIsLiked,
            }

            if (updatedPost.isLiked) {
                updatedPost.backgroundColor = 'blue'

            } else {
                updatedPost.backgroundColor = 'red'
            }

            const updatedPosts = [...state.posts];

            updatedPosts.splice(action.propsIndex.postIndex, 1, updatedPost);

            return {
                ...state,
                posts: updatedPosts
            }
        }
        case ON_REBLOG: {
            console.log(action)
            const currentisRebloged = state.posts[action.propsIndex.postIndex].isRebloged;
            console.log(action.propsIndex)
            console.log()
            const updatePost = { ...state.posts[action.propsIndex.postIndex], isRebloged: !currentisRebloged }

            const updatedPosts = [...state.posts];

            updatedPosts.splice(action.propsIndex.postIndex, 1, updatePost);

            return {
                ...state,
                posts: updatedPosts
            }
        }





        default: return state;
    }
}

export default reducer;