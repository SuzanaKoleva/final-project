import React, { Component } from 'react'

import classes from './PostComponent.module.css'


const postComponent = props =>
    (<section className={classes.container}>
        <header>
            <img src={props.propsObj.userImgSrc} className={classes.userImg} />
            <p className={classes.userNameFont}>{props.propsObj.userName}</p>
            <button className={classes.followLink} onClick={props.onFollow} title = 'Follow'>{ props.propsObj.isPosterFollowed ? 'Unfollow' : 'Follow' }</button>
        </header>
        <main>
            <h1 className={classes.postTitle}>{props.propsObj.title}</h1>
            {props.propsObj.imgSrc ?
                (<img src={props.propsObj.imgSrc} className={classes.postImg} />)
                : null}
            <p> {props.propsObj.discription}</p>
        </main>
        <footer>

            <div className = {classes.tags}>
                # tags
            </div>
            <div className ={classes.actionContainer}>
                <div>
                    <a className = {classes.notes}href=''> notes</a>
                </div>
                <div>
                    <a className={classes.actions} href='' title = 'Share' > ➣</a>                    
                    <a className={classes.actions} href='' title = 'Reblog'> 🔁</a>
                    <a className={classes.actions} href='' title = 'Like'> 🍓</a>
                </div>


            </div>

        </footer>

    </section>)

export default postComponent;