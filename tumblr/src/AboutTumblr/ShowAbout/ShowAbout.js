import React, { Component } from 'react';
import classes from './ShowAbout.module.css';
import Header from '../../Header/Header'
import "animate.css/animate.min.css";


class ShowAbout extends Component {

    render() {
        return (
            <div className={classes.container}>
                <Header />
                <div className={classes.middleContainer}>
                    <div className = { classes.center }>
                        <h1 className={classes.title}> Tumblr is so easy to use that it’s hard to explain. </h1>
                        <p className={classes.text}> We made it really, really simple for people to make a blog and put whatever they want on it. Stories, photos, GIFs, TV shows, links,
                 quips, dumb jokes, smart jokes, Spotify tracks, mp3s, videos, fashion, art, deep stuff. Tumblr is 460 million different blogs, filled with literally whatever. </p>
                    </div>
                </div>
            </div>
        )




    }
}

export default ShowAbout