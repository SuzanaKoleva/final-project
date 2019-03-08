import { LOAD_POSTS, ON_FOLLOW, ON_SHARE, ON_LIKE, ON_REBLOG } from './constants';

const initialState = {
    posts: [
        {
            
            userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
            userName: 'mocked name',
            postedFromUserId: 1,
            isPosterFollowed: false,
            isShare: false,
            isLiked: false,
            isRebloged: false,
            backgroundColor: 'red',
            marginBottom: '0px',
           
            

            title: 'mockedTitle',
            imgSrc: 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
            description: 'discrioption',

            category: 'mocked category',
            

        },
        {

            userImgSrc: 'https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png',
            userName: 'mocked name2 ',
            postedFromUserId: 2,
            isPosterFollowed: false,
            isShare: false,
            isLiked: false,
            isRebloged: false,
            backgroundColor: 'red',

            title: 'mockedTitle2',
            imgSrc: 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
            description: 'discrioption2',

            category: 'mocked category2'

        }
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_POSTS: {

            return {
                ...state,
                posts: [...action.payload]
            };
        }

        case ON_FOLLOW: {

            const currentinFollowed = state.posts[action.payload.postIndex].isPosterFollowed
            console.log (currentinFollowed)
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
            console.log(11111111111, state.posts[action.payload.postIndex].isShare);
           
            

            const currentIsShared = state.posts[action.payload.postIndex].isShare;


            console.log(2222222222222222222, state.posts[action.payload.postIndex].isShare)
            const updatedPost = {
                ...state.posts[action.payload.postIndex],
                isShare: !currentIsShared,
                
               
            }
            console.log(state.posts[action.payload.postIndex].backgroundColor)
            const updatedPosts = [...state.posts];

            updatedPosts.splice(action.payload.postIndex, 1, updatedPost);

            return {
                ...state,
                posts: updatedPosts
            };
        }
        case ON_LIKE: {
            console.log(22222222,state.posts[action.payload.postIndex].backgroundColor)
            const currentIsLiked = state.posts[action.payload.postIndex].isLiked;

            const updatedPost = {
                ...state.posts[action.payload.postIndex],
                isLiked: !currentIsLiked,             
            }

            if(updatedPost.isLiked) {
                updatedPost.backgroundColor = 'blue'
                
            } else {
                updatedPost.backgroundColor = 'red'
            }

            const updatedPosts = [... state.posts];

            updatedPosts.splice(action.payload.postIndex, 1 , updatedPost);

            return {
                ...state,
                posts: updatedPosts
            }
        }
        case ON_REBLOG: {
            console.log(action)
            const currentisRebloged = state.posts[action.payload.postIndex].isRebloged;
            console.log(action.payload)
            console.log()
            const updatePost = {... state.posts[action.payload.postIndex], isRebloged: !currentisRebloged}

            const updatedPosts = [... state.posts];

            updatedPosts.splice(action.payload.postIndex, 1, updatePost);

            return {
                ... state,
                posts:updatedPosts
            }
        }





        default: return state;
    }
}

export default reducer;