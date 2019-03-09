import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const header = props => (

    <header>
        this one!
        <div className = {classes.container}>
            <div className={classes.Logo}>
                <img src={require('../assets/images/tumblr-logo.png')} />
            </div>
            {/* <Input type="text" placeholder=" 🔍 Search tumblr" /> */}

            </div>
                <nav>
                    {/* <NavLink to='/profile'><img  className={classes.profileIcon} src='https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'/></NavLink> */}
                    <NavLink to="/login" className={classes.NavButton} >Sign up</NavLink>
                </nav>

    </header>
            );
            
export default header;