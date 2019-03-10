import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './CategoryPage.module.css'

import { setSelectedCategory } from '../App/actions';
import { onShareAction, onReblogAction } from './actions';
import { onLikedAction } from '../Users/actions/actions';
import { onFollowAction } from '../Users/actions/actions';


import PostComponent from '../PostComponent/PostComponent'
import AuthHeader from '../AuthHeader'




class Category extends Component {
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

        return (

            <div className={classes.container}>

                <AuthHeader history={this.props.history} location={this.props.history} />

                <h1 className={classes.titleCategory}>  {this.props.posts.length ? this.props.posts[0].category : ''} </h1>
                <div className={classes.postContainer}>

                    {this.props.posts.map((post, i) => <PostComponent
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

        posts: selectedCategoryName ? categoryReducer.categories[selectedCategoryName].posts : [],
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

export default connect(mapStateToProps, mapDispatchToProps)(Category)
