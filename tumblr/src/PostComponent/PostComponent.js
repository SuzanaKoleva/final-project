import React, { Component } from 'react'

import classes from './PostComponent.module.css'


const postComponent = props =>
    (<section className={classes.container}>
        <header className ={classes.postHeader}>
            <img src={props.propsObj.userImgSrc} className={classes.userImg} />
            <p className={classes.userNameFont}>{props.propsObj.userName}</p>
            <button className={classes.followLink} onClick={props.onFollowBtnClick} title = 'Follow'>{ props.propsObj.isPosterFollowed ? 'Unfollow' : 'Follow' }</button>
        </header>
        <main>
            <h1 className={classes.postTitle}>{props.propsObj.title}</h1>
            {props.propsObj.imgSrc ?
                (<img src={props.propsObj.imgSrc} className={classes.postImg}  />)
                : null}
            <p> {props.propsObj.description}</p>
        </main>
        <footer>

            <div className = {classes.tags}>
                { props.propsObj.tags.map((tag, i) => <span key={i}>#{tag} </span> )}
            </div>
            <div className ={classes.actionContainer}>
                <div>
                    <button className = {classes.notes}href=''> notes</button>
                </div>
                <div>
                    <button onClick={props.onShareBtnClick}className={classes.actions}  title = 'Share' > {props.propsObj.isShare ? 'you shared' : '➣'}</button>                    
                    <button onClick={props.onReblogBtnClick}className={classes.actions}  title = 'Reblog'>{props.propsObj.isRebloged ? 'you rebloged' : '🔁'} </button>
                    <button onClick={props. onLikedBtnClick}className={`${classes.actions}  ${props.propsObj.isLiked ? classes.btnClick: ''}`}  title = 'Like'> {props.propsObj.isLiked ? 'you liked' : '🍓'}</button>
                </div>


            </div>

        </footer>

    </section>)

export default postComponent;