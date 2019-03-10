import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './index.module.css'

import { setSelectedCategory } from '../App/actions';
import { onShareAction, onReblogAction } from './actions';
import { onLikedAction } from '../Users/actions/actions';
import { onFollowAction } from '../Users/actions/actions';


import PostComponent from '../PostComponent/PostComponent'
import AuthHeader from '../AuthHeader'




class PersonalPage extends Component {
    constructor(props) {

        super(props);



    }



    componentWillMount() {

        window.c = this;

        const categoryName = this.props.match.params.name;
        console.log(1111)

        this.props.triggerSetSelectedCategory(categoryName);
    }

    render() {
        let allPosts = [];
        
        for (let key in this.props.allCategories) {
            console.log(this.props.allCategories[key])
            

            allPosts = allPosts.concat(this.props.allCategories[key].posts);
        }

        const userPosts = allPosts.filter(post => post.postedFromUserId === this.props.loggedUser.id);

        return (

            <div className={classes.container}>

                <AuthHeader history={this.props.history} location={this.props.history} />

                <div className={classes.postContainer}>

                    {userPosts.map((post, i) => <PostComponent
                        key={i}
                        propsObj={post}
                        userDetails={this.props.loggedUser}
                        onFollowBtnClick={() => this.props.dispatchOnFollowAction(post.id)}
                        onShareBtnClick={() => this.props.dispatchOnShareAction(i)}
                        onLikedBtnClick={() => this.props.dispatchOnLikedAction(post.id)}
                        onReblogBtnClick={() => this.props.dispatchOnReblogAction(i)}
                    />)}


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { appReducer, categoryReducer, userReducer } = state;

    const selectedCategoryName = appReducer.selectedCategory;

    return {

        allCategories: categoryReducer.categories,
        loggedUser: userReducer.currentUser
    }
};

const mapDispatchToProps = dispatch => {

    return {
        dispatchOnFollowAction: (postId) => dispatch(onFollowAction( postId )),

        // dispatchOnShareAction: (someIndexNumber) => dispatch(onShareAction({
        //     postIndex: someIndexNumber
        // })),
        dispatchOnLikedAction: (postId) => dispatch(onLikedAction(postId)),

        // dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction({
        //     postIndex: someIndex
        // })),

        triggerSetSelectedCategory: (name) => dispatch(setSelectedCategory(name)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage)
