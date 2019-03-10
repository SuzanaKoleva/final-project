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

                    userImgSrc: 'https://library.kissclipart.com/20180917/xzw/kissclipart-animal-avatar-icon-clipart-owl-computer-icons-gian-89b9976cf9dcaaa2.png',
                    username: 'Service post from Tisho',
                    postedFromUserId: 2,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,

                },
                {

                    id: 2,
                    title: 'Money for travel',
                    imgSrc: 'https://intrepid-guewuklbkgvxhkhdo.stackpathdns.com/wp-content/uploads/2016/02/how-to-travel-cheap.jpg',
                    description: 'I am flying',
                    category: 'Travel',
                    tags: ['money', 'travel', 'earth'],

                    userImgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFANoiGzwMeVa4PdAnNJ3GBAZbA-TDlCnubGAc7oR6nbmaYo5k',
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
                    id: 3,
                    title: 'Pets',
                    imgSrc: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
                    description: 'I am a dog',
                    category: 'Pets',
                    tags: ['bark', 'jump', 'fluffy'],

                    userImgSrc: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png',
                    username: 'Service post from Pesho',
                    postedFromUserId: 1,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                },
                {
                    id: 4,
                    title: 'Pug',
                    imgSrc: 'https://cdn1-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/2-face.jpg',
                    description: 'I am a dog',
                    category: 'Pets',
                    tags: ['sweet', 'crazy', 'fluffy'],

                    userImgSrc: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png',
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
                    id: 5,
                    title: 'Voleyball ',
                    imgSrc: 'https://www.freepngimg.com/thumb/volleyball/5-2-volleyball-png-clipart-thumb.png',
                    description: 'I am playing',
                    category: 'Sports',
                    tags: ['sports', 'ball'],

                    userImgSrc: 'https://png.pngtree.com/element_origin_min_pic/16/11/27/a990aa1df1295aa94c1a4bbd9d435dd0.jpg',
                    username: 'Service post from Pesho',
                    postedFromUserId: 1,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                },
                {
                    id: 6,
                    title: 'balls',
                    imgSrc: 'https://s3-ap-southeast-2.amazonaws.com/2ser-wordpress/wp-content/aws/uploads/2017/12/28031943/academysport.jpg',
                    description: 'I am playing',
                    category: 'Sports',
                    tags: ['football', 'handball', 'baseball'],

                    userImgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifnTK6KU6YhYFXn3HHytTY__M4qjist_BC9b-6QBpMoPe3EqK',
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
                    id: 7,
                    title: 'Home accessories',
                    imgSrc: 'http://www.eneserarslan.com/wp-content/uploads/2018/10/home-accessories-candles-1-JsGnDl.jpg',
                    description: 'accessories',
                    category: 'Home',
                    tags: ['candle', 'lights', 'bed'],

                    userImgSrc: 'https://library.kissclipart.com/20180917/xzw/kissclipart-animal-avatar-icon-clipart-owl-computer-icons-gian-89b9976cf9dcaaa2.png',
                    username: 'Service post from Tisho',
                    postedFromUserId: 2,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                },
                {
                    id: 8,
                    title: 'Home accessories',
                    imgSrc: 'https://canadiantire.scene7.com/is/image/CanadianTire/ct-content-brand-canvas-dlp-LIT-home-decor-accessories?scl=1',
                    description: 'accessories',
                    category: 'Home',
                    tags: ['fwollers', 'cups'],

                    userImgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR7mEIgzy1Wt6e8HPDw9Urpqs_BJaqFigH1XCHxqQ_DExx8Dz',
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
                    id: 9,
                    title: 'beauty things',
                    imgSrc: 'https://scstylecaster.files.wordpress.com/2016/12/beauty-blogger-flat-lay.png',
                    description: 'I am pretty',
                    category: 'things',
                    tags: ['makeup', 'brush', 'lipstick'],

                    userImgSrc: 'http://speelbaars.com/press/Panda%20Pounce/images/icon.png',
                    username: 'Service post from Tisho',
                    postedFromUserId: 2,

                    isPosterFollowed: false,
                    isShare: false,
                    isLiked: false,
                    isRebloged: false,
                },
                {
                    id: 10,
                    title: 'makeup',
                    imgSrc: 'https://image.healthyway.com/image/upload/c_limit,q_auto:best,dpr_auto,w_728/v1507067416/mxlkcklub285vgigh4fu.jpg',
                    description: 'I am pretty',
                    category: 'things',
                    tags: ['makeup', 'womens', 'bless'],

                    userImgSrc: 'https://png.pngtree.com/element_origin_min_pic/16/11/30/c2885f46ae11ccfa8fc1198dd5464267.jpg',
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

            const postsFromCategory = state.categories[categoryType].posts;

            const newPostId = postsFromCategory[postsFromCategory.length - 1].id + 1;

            const newPost = {
                
                id: newPostId,
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