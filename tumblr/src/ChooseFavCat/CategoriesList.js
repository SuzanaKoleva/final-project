import React, { Component } from 'react';
import { loadCategories } from './actions';
import { connect } from 'react-redux';
import Categories from './categoryTemplate';
import Header from '../Header/Header';
import classes from './chooseFavCat.module.css';

const categoriesList = props => {
    return (
        <>
        <Header />
        <div className={classes.page}>
            <div className={classes.listCat}>Your categories: </div>
            <h1 className={classes.heading}>What're you into?</h1>
            <p>Tell us what you like and we'll get you the good stuff.</p>
            <div className={classes.categories}>
                { props.categories.map(category => <Categories key={category.id} {...category} />)}
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    const { categoriesListReducer } = state;
    return {
        categories: categoriesListReducer.categories
    }
}

export default connect(mapStateToProps, null)(categoriesList);