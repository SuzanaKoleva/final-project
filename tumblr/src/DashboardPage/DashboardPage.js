import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';

import classes from './DashboardPage.module.css'

import PrimaryDashboardActions from '../PrimaryDashboardActions'
import PostComponent from '../PostComponent/PostComponent'


import { onFollowAction, onShareAction, onLikedAction, onReblogAction } from '../CategoryPage/actions';

import { 
    onAddPostModalClose 
} from '../PrimaryDashboardActions/actions';

Modal.setAppElement('#root')

class Dashboard extends Component {
    constructor(props) {

        super(props);

        this.categoryOptions = ['pets', 'travel', 'sports', 'beauty', 'home'];
        this.selectedCategory = '';
    }

    componentDidMount() {

        window.d = this;
    }

    redirectToCategory(event) {
        this.selectedCategory = event.target.value;

        this.props.history.push(`/category/${this.selectedCategory}`)
        console.log(this.selectedCategory);
    }

    render() {

        return (

            <div className={classes.container}>

                <header>
                    
                    <h1 className={classes.titleCategory}> Choose category </h1>
    

                    <select onChange={(e) => this.redirectToCategory(e)} value={this.selectedCategory}>
                        {this.categoryOptions.map((option, i) => <option value={option} key={i}>{ option }</option>)}
                    </select>

                    <Modal
                        isOpen={this.props.isModalOpened}
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={this.props.triggerOnAddPostModalClose}
                        contentLabel="Example Modal"
                        >
                        <h1>{this.props.availablePostTypes[this.props.postTypeOpened].label}</h1>
                        <div>I am a modal</div>
             
                    </Modal>

                    <PrimaryDashboardActions />

                </header>
               <main className="feed-container">

                    { this.props.posts.map((post, i) => <PostComponent 
                        key={i}
                        propsObj={post}
                        onFollowBtnClick={() => this.props.dispatchOnFollowAction(i)}
                        onShareBtnClick = {() => this.props.dispatchOnShareAction(i)}
                        onLikedBtnClick = {() => this.props.dispatchOnLikedAction (i)}
                        onReblogBtnClick = {() => this.props.dispatchOnReblogAction(i)} /> )}
               </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { categoryReducer, primaryDashboardActionsReducer } = state;
    
    return {

        posts: categoryReducer.feed.posts,

        isModalOpened: primaryDashboardActionsReducer.isModalOpened,
        availablePostTypes: primaryDashboardActionsReducer.availablePostTypes,
        postTypeOpened: primaryDashboardActionsReducer. postTypeOpened,
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
            postIndex:someIndexNumber
        })),
        dispatchOnReblogAction: (someIndex) => dispatch(onReblogAction ({
            postIndex: someIndex
        })),

        triggerOnAddPostModalClose: (postType) => dispatch(onAddPostModalClose({
            
        })),


    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
