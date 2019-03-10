import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';

import classes from './DashboardPage.module.css'

import PrimaryDashboardActions from '../PrimaryDashboardActions'
import PostComponent from '../PostComponent/PostComponent'
import PostAreaText from '../PostAreaText'
import AuthHeader from '../AuthHeader'
import PostPhoto from '../PostPhoto'
import PostQuote from '../PostQuote'


import { setSelectedCategory } from '../App/actions';
import { onShareAction, onReblogAction } from '../CategoryPage/actions';
import { onLikedAction } from '../Users/actions/actions';
import { onFollowAction } from '../Users/actions/actions';


import {
    onAddPostModalClose
} from '../PrimaryDashboardActions/actions';

Modal.setAppElement('#root')

class Dashboard extends Component {
    constructor(props) {

        super(props);

    }

    componentDidMount() {

        window.d = this;
    }

    redirectToCategory(event) {
        
        this.props.triggerSetSelectedCategory(event.target.value);

        this.props.history.push(`/category/${event.target.value}`);
    }

    render() {

        let feedPosts = [];
        
        for (let key in this.props.categories) {
            console.log(this.props.categories[key])
            

            feedPosts = feedPosts.concat(this.props.categories[key].posts);
        }
        
        let newPostComponentType;

        switch(this.props.postTypeOpened) {

            case 'text':
                newPostComponentType = <PostAreaText/>;
                break;

            case 'photos':
                newPostComponentType = <PostPhoto/>;
                break;

            case 'quote':
                newPostComponentType = <PostQuote/>;
                break;

            default:
                newPostComponentType = <PostAreaText/>;
        }

        return (

            <div className={classes.container}>
                <AuthHeader history={this.props.history} location={this.props.history}/>
 
                <Modal
                    isOpen={this.props.isModalOpened}
                    
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.props.triggerOnAddPostModalClose}
                    className = {classes.Modal}
                    // #
                    style={{
                        overlay: {
                            backgroundColor: '#001935f2'
                        },
                        // content: {
                        //     top: '90px',
                        //     left: '90px',
                        //     width: '540px',
                        //     height: '300px'
                        // }
                        
                    }}
                >
                    
                    { newPostComponentType }
                {/* {
                    if (this.props.postTypeOpened) {

                    }
                } */}
                    {/* diff the components inside the modal based on this prop <h1>{this.props.availablePostTypes[this.props.postTypeOpened].label}</h1> */}
                    {/* <span>{ this.props.availablePostTypes[this.props.postTypeOpened] }</span> */}
                    {/* <PostAreaText postType={this.props.availablePostTypes[this.props.postTypeOpened]} />
                    
                    <PostPhoto postType={this.props.availablePostTypes[this.props.postTypeOpened]} /> */}
                </Modal>

{/*                          
                <Modal
                    isOpen={this.props.isModalOpened}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.props.triggerOnAddPostModalClose}
                    // #
                    style={{
                        overlay: {
                            backgroundColor: '#001935f2'
                        },
                        content: {
                            top: '90px',
                            left: '90px',
                            width: '540px',
                            height: '300px'
                        }
                        }}
                >
                    {/* diff the components inside the modal based on this prop <h1>{this.props.availablePostTypes[this.props.postTypeOpened].label}</h1> 

                    <PostPhoto postType={this.props.availablePostTypes[this.props.postTypeOpened]} />
                </Modal> */}


                <main className={classes.feedContainer}>
                    <PrimaryDashboardActions />




                    {feedPosts.map((post, i) => <PostComponent

                        key={i}
                        propsObj={post}
                        userDetails={this.props.userDetails}
                        onFollowBtnClick={() => this.props.dispatchOnFollowAction(post.id)}
                        onLikedBtnClick={() => this.props.dispatchOnLikedAction(post.id)} />)}
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { categoryReducer, primaryDashboardActionsReducer, appReducer, userReducer } = state;

    return {

        categories: categoryReducer.categories,

        isModalOpened: primaryDashboardActionsReducer.isModalOpened,
        availablePostTypes: primaryDashboardActionsReducer.availablePostTypes,
        postTypeOpened: primaryDashboardActionsReducer.postTypeOpened,
        categoryOptions: appReducer.categoryOptions,
        
        userDetails: userReducer.currentUser
    }
};

const mapDispatchToProps = dispatch => {

    return {
        dispatchOnFollowAction: (postId) => dispatch(onFollowAction(postId)),

        dispatchOnShareAction: (someIndexNumber) => dispatch(onShareAction({
            postIndex: someIndexNumber
        })),
        dispatchOnLikedAction: (postId) => dispatch(onLikedAction(postId)),
        dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction({
            postIndex: someIndex
        })),

        triggerOnAddPostModalClose: (postType) => dispatch(onAddPostModalClose({

        })),

        triggerSetSelectedCategory: (type) => dispatch(setSelectedCategory(type)),

        


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
