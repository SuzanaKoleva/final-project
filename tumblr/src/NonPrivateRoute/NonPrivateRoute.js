import React, { Component } from 'react'

import { Redirect, Route } from 'react-router-dom';

const NonPrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => isAuthenticated === false
          ? <Component {...props} />
          : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />}
      />
    )
  }

export default NonPrivateRoute;