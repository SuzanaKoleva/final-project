import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './CategoryPage.module.css'

import { setSelectedCategory } from '../App/actions';
import { onFollowAction, onShareAction, onLikedAction, onReblogAction } from './actions';

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

                <AuthHeader history={this.props.history} location={this.props.history}/>
                
                <h1 className={classes.titleCategory}>  {this.props.posts.length ? this.props.posts[0].category : ''} </h1>
                <div className = {classes.postContainer}>

                    { this.props.posts.map((post, i) => <PostComponent 
                    key={i}
                     propsObj={post}
                      onFollowBtnClick={() => this.props.dispatchOnFollowAction(i)}
                      onShareBtnClick = {() => this.props.dispatchOnShareAction(i)}
                      onLikedBtnClick = {() => this.props.dispatchOnLikedAction (i)}
                      onReblogBtnClick = {() => this.props.dispatchOnReblogAction(i)} /> )}


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { appReducer, categoryReducer } = state;
    
    const selectedCategoryName =  appReducer.selectedCategory;
console.log('mapp', selectedCategoryName)
    return {

        posts: selectedCategoryName ? categoryReducer.categories[selectedCategoryName].posts : []
    }
};

const mapDispatchToProps = dispatch => {

    return {
        dispatchOnFollowAction: (someIndexNumber) => dispatch(onFollowAction({
            postIndex: someIndexNumber
        })),

        dispatchOnShareAction: (someIndexNumber) => dispatch(onShareAction({
            postIndex: someIndexNumber
        })),
        dispatchOnLikedAction: (someIndexNumber) => dispatch(onLikedAction({
            postIndex: someIndexNumber
        })),
        dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction ({
            postIndex: someIndex
        })),

        triggerSetSelectedCategory: (name) => dispatch(setSelectedCategory(name)),


    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Category)
