import React, { Component } from 'react'

import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    
    
  console.log(isAuthenticated)
  
    return (
      <Route
        {...rest}
        render={(props) => !!isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{pathname: '/landing', state: {from: props.location}}} />}
      />
    )
  }

export default PrivateRoute;