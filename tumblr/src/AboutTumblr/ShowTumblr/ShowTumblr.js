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
                        <h1>Tumblr is so easy to use that it’s hard to explain.</h1>
                        <p>We made it really, really simple for people to make a blog and put whatever they want on it.
                             Stories, photos, GIFs, TV shows, links, quips, dumb jokes, smart jokes, Spotify tracks, mp3s,
                              videos, fashion, art, deep stuff. Tumblr is 461 million different blogs, filled with
                             literally whatever.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowTumblr;