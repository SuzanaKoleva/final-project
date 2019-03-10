import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';

import classes from './ShowLogin.module.css';
import Button from '../Button/Button'

const loginButton = {
    color: 'black',
    backgroundColor: '#ffffff',
    width: '100%',
    marginLeft: '-0.33%',
}
const getStartedButton = {
    width: '100%',
    marginLeft: '-0.33%',
}

class Login extends Component {

    goToLogin = event => {
        event.preventDefault();
        this.props.history.push('/login');
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
                        <NavLink to="/info" className={classes.NavButton}>
                            <Button title="Get started" style={getStartedButton} />
                        </NavLink>

                        <NavLink to="/login" className={classes.NavButton} >
                            <Button title="Log In" style={loginButton} />
                        </NavLink>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}
export default Login