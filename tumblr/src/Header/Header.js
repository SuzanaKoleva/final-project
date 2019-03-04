import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const header = props => (

    <header>
        <div className = {classes.container}>
            <div className={classes.Logo}>
                <img src={require('../assets/images/tumblr-logo.png')} />
            </div>
            <Input type="text" placeholder="Search tumblr" />

            </div>
                <nav>
                    {/* {props.isLogged ? 
        <>
            <NavLink to="/">Home</NavLink>
        </>
        : null} */}
                    <NavLink to="/login" className={classes.NavButton} >Sign up</NavLink>
                </nav>
                {/* <Button title="Sign Up"/> */}

    </header>
            );
            
export default header;