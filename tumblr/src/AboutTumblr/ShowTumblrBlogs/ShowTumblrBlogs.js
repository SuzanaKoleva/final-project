import React, { Component } from 'react';
import classes from './ShowTumblrBlogs.module.css';
import Header from '../../Header/Header';
import "animate.css/animate.min.css";

class ShowTumblrBlogs extends Component {
    render() {
        return (
            <div className={classes.container}>
                <Header />
                <div className={classes.content}>
                    <h1>Tumblr is blogs.</h1>
                    <p>Turns out that when you make it easy to create interesting things, 
                        that’s exactly what people do. All those great, random blogs your 
                        friends send you, those are Tumblr blogs. We’ll help you find and 
                        follow blogs like that, and we’ll help other people find and follow yours.
                    </p>
                </div>
                <div className={classes.imgContainer}>
                    <img className={classes.blogs} src={require('./blogs.png')}/>
                </div>
            </div>
        )
    }
}

export default ShowTumblrBlogs;