import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';

import classes from './DashboardPage.module.css'

import PrimaryDashboardActions from '../PrimaryDashboardActions'
import PostComponent from '../PostComponent/PostComponent'
import PostAreaText from '../PostAreaText'
import AuthHeader from '../AuthHeader'


import { setSelectedCategory } from '../App/actions';
import { onFollowAction, onShareAction, onLikedAction, onReblogAction } from '../CategoryPage/actions';

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

        console.log(feedPosts);
        
        return (

            <div className={classes.container}>
                <AuthHeader history={this.props.history} location={this.props.history}/>
 
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
                    {/* diff the components inside the modal based on this prop <h1>{this.props.availablePostTypes[this.props.postTypeOpened].label}</h1> */}

                    <PostAreaText postType={this.props.availablePostTypes[this.props.postTypeOpened]} />
                </Modal>
                <main className={classes.feedContainer}>
                    <PrimaryDashboardActions />




                    {feedPosts.map((post, i) => <PostComponent

                        key={i}
                        propsObj={post}
                        onFollowBtnClick={() => this.props.dispatchOnFollowAction(i)}
                        onShareBtnClick={() => this.props.dispatchOnShareAction(i)}
                        onLikedBtnClick={() => this.props.dispatchOnLikedAction(i)}
                        onReblogBtnClick={() => this.props.dispatchOnReblogAction(i)} />)}
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { categoryReducer, primaryDashboardActionsReducer, appReducer } = state;

    return {

        categories: categoryReducer.categories,

        isModalOpened: primaryDashboardActionsReducer.isModalOpened,
        availablePostTypes: primaryDashboardActionsReducer.availablePostTypes,
        postTypeOpened: primaryDashboardActionsReducer.postTypeOpened,
        categoryOptions: appReducer.categoryOptions
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
        dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction({
            postIndex: someIndex
        })),

        triggerOnAddPostModalClose: (postType) => dispatch(onAddPostModalClose({

        })),

        triggerSetSelectedCategory: (type) => dispatch(setSelectedCategory(type)),

        


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
