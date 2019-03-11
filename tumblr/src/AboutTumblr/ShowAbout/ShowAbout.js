import React, { Component } from 'react';
import classes from './ShowAbout.module.css';
import Header from '../../Header/Header'
import "animate.css/animate.min.css";

class ShowAbout extends Component {

    render() {
        return (
            <div className={classes.container}>
                <Header/>
                <div className={classes.middleContainer}>
                    <div className={classes.center }>
                        <div className={classes.backgroundImage}>
                            <img src={require('./tumblrslide2.png')} />
                        </div>
                        
                        <h1 className={classes.title}>Използвани технологии:</h1>
                        <div>
                            <ul>
                                <li><strong>ReactJS</strong></li>
                                <li><strong>Redux</strong></li>
                                <li><strong>HTML5</strong></li>
                                <li><strong>CSS3</strong></li>
                                <li><strong>Felexbox</strong></li>
                                <li><strong>responsive design</strong></li>
                                <li><strong>routing</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )




    }
}

export default ShowAbout