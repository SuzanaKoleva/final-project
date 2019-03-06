import React, { Component } from 'react';
import { loadCategories } from './actions';
import { connect } from 'react-redux';
// import PostComponent from '../PostComponent/PostComponent'
import Categories from './categoryTemplate';

const categoriesList = props => {
    return (
        <>
        <h1>Categories</h1>
        <div>
            { props.categories.map(category => <Categories key={category.id} {...category} />)}
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