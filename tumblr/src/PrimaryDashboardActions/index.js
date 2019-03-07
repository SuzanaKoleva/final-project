import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './index.module.css'

// import PostComponent from '../PostComponent/PostComponent'
import { 
    onAddPostModalOpen, 
    onAddPostModalClose 
} from './actions';

class PrimaryDashboardActions extends Component {
    constructor(props) {

        super(props);

    }

    componentDidMount() {

        window.a = this;
    }

    openAddPostModal(postType) {
        //onAddPostModalOpen
    }

    render() {

        return (


            <section className={classes.container}>
                
                { Object.keys(this.props.availablePostTypes).map(key => (
                        <button 
                            key={key}
                            onClick={() => this.props.triggerOnAddPostModalOpen(key)}>{this.props.availablePostTypes[key].label}
                        </button>
                    )
                )}

            </section>
            
        )
    }
}

const mapStateToProps = (state) => {

    const { primaryDashboardActionsReducer } = state;
    
    return {

        // posts: categoryReducer.feed.posts,
        availablePostTypes: primaryDashboardActionsReducer.availablePostTypes,
        postTypeOpened: primaryDashboardActionsReducer. postTypeOpened,
        isModalOpened: primaryDashboardActionsReducer.isModalOpened,
    }
};

const mapDispatchToProps = dispatch => {

    return {
        triggerOnAddPostModalOpen: (postType) => dispatch(onAddPostModalOpen({
            postTypeOpened: postType
        })),        
        triggerOnAddPostModalClose: (postType) => dispatch(onAddPostModalClose({
            
        })),
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryDashboardActions)
