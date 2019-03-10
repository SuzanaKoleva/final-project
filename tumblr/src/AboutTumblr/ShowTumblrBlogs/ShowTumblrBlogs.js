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
                    <h1>Кои сме ние и как се разпределихме?</h1>
                    <br />
                    <p>
                        <strong>Сузана Колева</strong> и <strong>Георги Керанов</strong>
                        <br />
                        <br />
                        Сузана - компоненти за Категории и Постове, начална страница след логване, публикуване на пост, 
                        снимка и цитат от потребител, css/responsive design.
                        <br />
                        <br />
                        Георги - регистрация и логин на потребител, начална страница преди логин, css/responsive design.
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