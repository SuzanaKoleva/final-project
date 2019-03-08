import React, { Component } from 'react';
import classes from './ShowTumblr.module.css';
import Header from '../../Header/Header';
import "animate.css/animate.min.css";

class ShowTumblr extends Component{
    render() {
        return(
            <div className={classes.container}>
                <Header />
                <div className={classes.content}>
                    <div className={classes.imageContainer}>
                        <img src={require('./blog.png')}/>
                    </div>
                    <div className={classes.text}>
                        <h1>You already know how this works.</h1>
                        <p>Once you follow a blog, all of its posts show up in your dashboard, just like you’d expect. 
                            See something great? Reblog it to your own blog. Add commentary if you like. Make it your
                             own. Other people will do the same to your posts. That’s how you meet people here.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowTumblr;