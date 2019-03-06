import { LOAD_POSTS, ON_FOLLOW } from './constants';

const initialState =  {
    posts: [
        {
            
            userImgSrc: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            userName: 'mocked name',
            postedFromUserId: 1,
            isPosterFollowed: false,

            title: 'mockedTitle',
            imgSrc: 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
            discription: 'discrioption',

            category: 'mocked category'

        }, 
        {
            
            userImgSrc: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            userName: 'mocked name2 ',
            postedFromUserId: 2,
            isPosterFollowed: false,

            title: 'mockedTitle2',
            imgSrc: 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
            discription: 'discrioption2',

            category: 'mocked category2'

        }
    ]
};

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case LOAD_POSTS: {

            return {
                ...state, 
                posts: [...action.payload]
            };
        }

        case ON_FOLLOW: {

            const updatedPost = {

                ...state.posts[action.payload.postIndex],
                isPosterFollowed: true
            };

            const updatedPosts = [...state.posts];

            
            
            updatedPosts.splice(action.payload.postIndex, 1, updatedPost);

            return {
                ...state, 
                posts: updatedPosts
            };
        }

        default: return state;
    }
}

export default reducer;