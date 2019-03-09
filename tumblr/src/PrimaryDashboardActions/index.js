import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './index.module.css'

// import PostComponent from '../PostComponent/PostComponent'
import { 
    onAddPostModalOpen, 
} from './actions';

class PrimaryDashboardActions extends Component {
    constructor(props) {

        super(props);

    }

    componentDidMount() {

    }

    render() {

        return (


            <section className={classes.container}>
                
                { Object.keys(this.props.availablePostTypes).map(key => (
                        <button 
                        className = {classes.buttonPriraryDashboard}
                            key={key}
                            onClick={() => this.props.triggerOnAddPostModalOpen(key)}>
                            <img  style = {{height: '50px'}} src = { this.props.availablePostTypes[key].img}/>
                            {this.props.availablePostTypes[key].label}
                            
                            
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
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryDashboardActions)
