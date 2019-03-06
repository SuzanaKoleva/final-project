import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


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

import LandingPage from '../LandingPage/LandingPage'
import DashboardPage from '../DashboardPage/DashboardPage'
import CategoryPage from '../CategoryPage/CategoryPage'

import categoriesList from '../ChooseFavCat/CategoriesList'
import Categories from '../ChooseFavCat/categoryTemplate';

/**
 * Components
 */
import Header from '../Header/Header.js';
import Button from '../UI/Button/Button';

import ShowLogin from '../AboutTumblr/ShowLogin/ShowLogin'
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout'

class App extends Component {
  render() {
    const isLogged = true;
    //JSON.parse(sessionStorage.getItem('user')) !== null;
    console.log(isLogged)
    return (
      <BrowserRouter>
      
        <div className="App">
        
        <Header />
          <main>
            <Switch>

              {/* Insert NON - private routes here */}
              <NonPrivateRoute isAuthenticated={isLogged} path='/login' component={Login} />
              <NonPrivateRoute isAuthenticated={isLogged} path='/register' component={Register} />
              <NonPrivateRoute isAuthenticated={isLogged} path='/landing' component={LandingPage} />



              
              {/* Insert private routes here */}
              <PrivateRoute isAuthenticated={isLogged} path='/dashboard' component={DashboardPage} />
              <PrivateRoute isAuthenticated={isLogged} path='/category/:name' component={CategoryPage} />
              <PrivateRoute isAuthenticated={isLogged} path='/listCategories' component={categoriesList}/>
              {/* <PrivateRoute isAuthenticated={isLogged} path='/listCategories' component={Categories}/> */}

            	



              {/* If no route is matched -> redirect to appropriate route, based on isLogged */}
              {
                isLogged ? 
                  <Route path="/" component={DashboardPage} /> : 
                  <Route path="/" component={LandingPage} />
              }

            </Switch>
           
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
