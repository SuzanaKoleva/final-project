import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import Home from '../Home/Home';
import Button from '../UI/Button/Button'
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout'
import Login from '../LoginPage/Login';
import Register from '../LoginPage/Register'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    const isLogged = sessionStorage.getItem('user') !== null;
    return (
      <BrowserRouter>
      
        <div className="App">
        <ShowAbout/>
        {/* <Header /> */}
          <main>
            <Switch>
            {/* <Route path="/" component={ShowAbout} /> */}
               {/* <h1>tumblr</h1> */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {isLogged ?
              <React.Fragment>
               {/* <Route path="/" component={ShowAbout} /> */}
                <Route path="/" component={Home} />
                
              </React.Fragment>
              :null}
              
            </Switch>
           
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
