import React, { Component } from 'react';
import classes from './showLastSlide.module.css';
import Header from '../../Header/Header';
import "animate.css/animate.min.css";

class ShowLastSlide extends Component{
    render() {
        return(
            <div className={classes.container}>
                <Header />
                <div className={classes.content}>
                    <div className={classes.imageContainer}>
                        <img src={require('./types.png')}/>
                    </div>
                    <h1>Seriously, put anything you want here.</h1>
                    <p>Seven post types to get you started. Your brain can do the rest. This thing is yours. 
                        Use it however you like.
                    </p>
                </div>
            </div>
        )
    }
}

export default ShowLastSlide;