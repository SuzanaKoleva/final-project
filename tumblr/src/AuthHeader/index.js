import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './index.module.css'

import { setSelectedCategory } from '../App/actions';
import { logOutUser } from '../Users/actions/actions';
import Button from '../UI/Button/Button';

const buttonStyles = {
    color: '#333',
    backgroundColor: '#fff',
}

const icons = {
    backgroundColor: 'rgba(0,0,0,0)',
}

class AuthHeader extends Component {
    constructor(props) {

        super(props);

    }
    componentDidMount() {
        window.l = this;
    }

    redirectToCategory(event) {

        this.props.triggerSetSelectedCategory(event.target.value);

        this.props.history.push(`/category/${event.target.value}`);
    }
    goToDashboard() {
        this.props.history.push('/dashboard')
    }
    goToPersonalPage () {
        this.props.history.push('/personal-page')
    }

    logOut() {

        this.props.triggerLogOutUser();

        this.props.history.push('/landing');
    }

    render() {

        const categoryOptions = Object.keys(this.props.categoryOptions);

        return (

            
            <header className={classes.headerContainer}>
                <div className={classes.rightHeaderContainer}>
                    <h1 className={classes.titleCategory}> Choose category </h1>


                    <select className={classes.selectContainer} onChange={(e) => this.redirectToCategory(e)} value={this.selectedCategory}>
                        <option value=''>Select category...</option>
                        {categoryOptions.map((option, i) => <option value={option} key={i}>{option}</option>)}
                    </select>


                    <div className={classes.navContainer}>
                        <div>
                            <button className={classes.btnDashboard} onClick = {() => this.goToDashboard()}>🏠</button>
                            <button className={classes.btnAccount}onClick ={() =>this.goToPersonalPage()}>👤</button>
                        </div>
                        <button className={classes.btnLogOut} onClick={() => this.logOut() }>Log Out</button>

                    </div>
                </div>
            </header>

        )
    }
}

const mapStateToProps = (state) => {

    const { appReducer } = state;

    return {
        selectedCategory: appReducer.selectedCategory,
        categoryOptions: appReducer.categoryOptions
    }
};

const mapDispatchToProps = dispatch => {

    return {

        triggerSetSelectedCategory: (type) => dispatch(setSelectedCategory(type)),
        triggerLogOutUser: () => dispatch(logOutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader)
