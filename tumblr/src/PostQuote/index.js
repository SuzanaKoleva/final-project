import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';


import classes from './index.module.css'

// import PostComponent from '../PostComponent/PostComponent'
import {
    addPostToCategory,
} from '../CategoryPage/actions';

import {
    onAddPostModalClose
} from '../PrimaryDashboardActions/actions';


class PostQuote extends Component {
    constructor(props) {

        super(props);

        this.state = {
            titleInputValue: '',
            tagsInputValue: '',
            descriptionInputValue: '',
            selectedCategoryValue: '',
            

        };
    }


    componentDidMount() {

        window.p = this;
    }

    submitPost() {
        console.log(this.state)
        // addPostToFeed
        this.props.triggerAddPostToCategory({
            categoryType: this.state.selectedCategoryValue,
            postData: {
                title: this.state.titleInputValue,
                quote:this.state.quoteInputValue,
                tags: [this.state.tagsInputValue],
                
            },

            userData: {
                postetFromUserId: this.props.user.id,
                username: this.props.user.username,
                userImgSrc: this.props.user.profileImg,
            }
        });

        this.props.triggerOnAddPostModalClose();
    }

    updateInputValue(evt, inputType) {

        this.setState({
            [inputType]: evt.target.value
        });
    }

    render() {

        const categoryOptions = Object.keys(this.props.categoryOptions);
        return (


            <section className={classes.container}>

                <input
                    className={classes.titleInput}
                    type="text"
                    placeholder="Title"
                    value={this.state.titleInputValue}
                    onChange={evt => this.updateInputValue(evt, 'titleInputValue')} />                    

                <textarea
                    className={classes.descriptionInput}
                    type="text"
                    placeholder="Your quote here"
                    value={this.state.quoteInputValue}
                    onChange={evt => this.updateInputValue(evt, 'quoteInputValue')}>
                    
                </textarea>
                <input
                    className={classes.hashtagsInput}
                    type="text"
                    placeholder="#tags"
                    value={this.state.tagsInputValue}
                    onChange={evt => this.updateInputValue(evt, 'tagsInputValue')} />


                <select className={classes.selectCategory} onChange={(evt) => this.updateInputValue(evt, 'selectedCategoryValue')} value={this.state.selectedCategory}>

                    <option value=''>Select category...</option>
                    {categoryOptions.map((option, i) => <option value={option} key={i}>{option}</option>)}
                </select>


                <footer className={classes.footerContainer}>

                    <button className={classes.buttonClose} onClick={() => this.props.triggerOnAddPostModalClose()}>Close</button>
                    <button className={classes.buttonPost} onClick={() => this.submitPost()}>Post</button>
                </footer>

            </section>

        )
    }
}

const mapStateToProps = (state) => {

    const { postPhotoReducer, appReducer, userReducer } = state;

    return {

        availablePostTypes: postPhotoReducer.availablePostTypes,
        categoryOptions: appReducer.categoryOptions,
        user: userReducer.currentUser
    }
};

const mapDispatchToProps = dispatch => {

    return {
        triggerAddPostToCategory: (postData) => dispatch(addPostToCategory(postData)),
        triggerOnAddPostModalClose: () => dispatch(onAddPostModalClose()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostQuote)
