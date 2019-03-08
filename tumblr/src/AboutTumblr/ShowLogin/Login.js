import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';

import classes from './ShowLogin.module.css';
import Button from '../Button/Button'

const loginButton = {
    color: 'black',
    backgroundColor: '#ffffff',
    width: '40%',
}
const getStartedButton = {
    width: '40%',
}

class Login extends Component {

    goToLogin = event => {
        event.preventDefault();
        this.props.history.replace('/login');
    }

    render() {
        return (

            //   
            <ScrollAnimation animateIn="zoomIn"
                initiallyVisible={true}
                animateOnce={true}
            >

                <div className={classes.middle}>
                    <div className={classes.loginContainer}>
                        <h1 className={classes.title}> tumblr </h1>
                        <p className={classes.text}>Come for what you love.
                        <br />
                            Stay for what you discover.
                        </p>
                        <Button title="Get started" style={getStartedButton} />

                        <Button title="Log In" style={loginButton} />

                        <NavLink to="/dashboard" className={classes.NavButton} >Sign up</NavLink>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}
export default Login