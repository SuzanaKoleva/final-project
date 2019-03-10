import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import NonPrivateRoute from '../NonPrivateRoute/NonPrivateRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

import logo from '../logo.svg';

import './App.css';

/**
 * Containers
 */
import Login from '../LoginPage/Login'
import Register from '../LoginPage/Register'
import Home from '../Home/Home'; //TODO: delete - deprecated
import Info from '../AboutTumblr/ShowLogin/Info';
import LandingPage from '../LandingPage/LandingPage'
import DashboardPage from '../DashboardPage/DashboardPage'
import CategoryPage from '../CategoryPage/CategoryPage'
import PersonalPage from '../PersonalPage/index'


import categoriesList from '../ChooseFavCat/CategoriesList'

/**
 * Components
 */
import Header from '../Header/Header.js';
import Button from '../UI/Button/Button';

import ShowLogin from '../AboutTumblr/ShowLogin/ShowLogin'
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout'

/**
 * Actions
 */
import { setInitialAppStateReady } from './actions'
import { setUsersList, setLoggedUserDetails } from '../Users/actions/actions'
import { setCategoriesData } from '../CategoryPage/actions'




let clearOnBeforeUnload = null;

class App extends Component {

  componentWillMount() {
window.a = this;
    console.log('App is about to mount... set initialState for reducers from LS.')

    const userData = JSON.parse(sessionStorage.getItem('user'));
    const usersList = JSON.parse(sessionStorage.getItem('usersList'));
    const categoriesData = JSON.parse(sessionStorage.getItem('categories'));
    

    this.props.triggerSetUsersList(usersList);
    this.props.triggerSetLoggedUserDetails(userData);
    this.props.triggerSetCategoriesData(categoriesData);

    this.props.triggerSetInitialAppStateReady();
  }

  componentDidMount() {

    clearOnBeforeUnload = window.addEventListener('beforeunload', () => this.cacheAppStateToStorage());
  }

  componentWillUnmount() {

    clearOnBeforeUnload();
  }

  cacheAppStateToStorage() {
    
    console.log('App is about to UNmount... set redux\' state to LS.')

    const userData = this.props.loggedUser;

    const usersList = this.props.users;

    const categories = this.props.categories;

    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('usersList', JSON.stringify(usersList));
    sessionStorage.setItem('categories', JSON.stringify(categories));
  }

  render() {

    if (!this.props.isInitialAppStateReady) {

      return null;
    }

    return (
      <BrowserRouter>
      
        <div className="App">
        
        {/* <Header /> */}
          <main>
            <Switch>

              {/* Insert NON - private routes here */}
              <NonPrivateRoute path='/login' component={Login} isAuthenticated={this.props.isAuthenticated}/>
              <NonPrivateRoute path='/register' component={Register} isAuthenticated={this.props.isAuthenticated}/>
              <NonPrivateRoute path='/landing' component={LandingPage} isAuthenticated={this.props.isAuthenticated}/>
              <NonPrivateRoute path='/info' component={Info} isAuthenticated={this.props.isAuthenticated}/>

              {/* Insert private routes here */}
              <PrivateRoute path='/dashboard' component={DashboardPage} isAuthenticated={this.props.isAuthenticated}/>
              <PrivateRoute path='/category/:name' component={CategoryPage} isAuthenticated={this.props.isAuthenticated}/>
              <PrivateRoute path='/listCategories' component={categoriesList} isAuthenticated={this.props.isAuthenticated}/>
              <PrivateRoute path='/personal-page' component={PersonalPage} isAuthenticated={this.props.isAuthenticated}/>



              {/* If no route is matched -> redirect to appropriate route, based on userInLocalStorage */}
              <PrivateRoute path='/' component={DashboardPage}/>

            </Switch>
           
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {

  const { appReducer, userReducer, categoryReducer } = state;
  
  return {
    isInitialAppStateReady: appReducer.isInitialAppStateReady,
    isAuthenticated: !!userReducer.currentUser,
    loggedUser: userReducer.currentUser,
    users: userReducer.users,
    categories: categoryReducer.categories
  }
};

const mapDispatchToProps = dispatch => {
  return {
    triggerSetInitialAppStateReady: () => dispatch(setInitialAppStateReady()),
    triggerSetUsersList: users => dispatch(setUsersList(users)),
    triggerSetLoggedUserDetails: user => dispatch(setLoggedUserDetails(user)),
    triggerSetCategoriesData: categories => dispatch(setCategoriesData(categories))
    
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);



