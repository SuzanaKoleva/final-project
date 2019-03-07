import { SET_SELECTED_CATEGORY_NAME, LOAD_POSTS, ON_FOLLOW, ON_SHARE, ON_LIKE, ON_REBLOG } from './constants';

const initialState = {
    feed: {

        posts: [                
            {

                title: 'Flight',
                imgSrc: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
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

            },  {
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
            }, {

                title: 'Flight',
                imgSrc: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
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

            },  {
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
    categories: {

        travel: {
            posts: [
                {

                    title: 'Flight',
                    imgSrc: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg',
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
            name: 'travel'
        },
        pets: {
            isActive: true,
            name: 'pets'
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