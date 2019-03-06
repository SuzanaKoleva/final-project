import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


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


/**
 * Components
 */
import Header from '../Header/Header.js';
import Button from '../UI/Button/Button';

import ShowLogin from '../AboutTumblr/ShowLogin/ShowLogin'
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout'

class App extends Component {
  render() {
    const isLogged = true
    //JSON.parse(sessionStorage.getItem('user')) !== null;
    console.log(isLogged)
    return (
      <BrowserRouter>
      
        <div className="App">
        
        {/* <Header /> */}
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* add none logged in routes here */}


              

              {isLogged ?
              <React.Fragment>
               
                <Route path="/dashboard" component={DashboardPage} />

                {/* add logged in routes here */}





                <Route  path="/" component={DashboardPage}/> 
                
              </React.Fragment> : null }
              
              <Route path="/" component={LandingPage} />
            </Switch>
           
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
