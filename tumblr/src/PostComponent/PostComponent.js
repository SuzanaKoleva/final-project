import React, { Component } from 'react'

import classes from './PostComponent.module.css'


const postComponent = props => {

    console.log(props.userDetails)
    // const likedPosts = props.userDetails.likedPosts;    
    const { likedPosts } = props.userDetails;
    const { followedPost } = props.userDetails
    console.log(likedPosts)
    console.log(followedPost)
    const postId = props.propsObj.id;

    const isLiked = likedPosts[postId];
    const isPosterFollowed = followedPost[postId]
    console.log(isPosterFollowed)
    console.log(isLiked)

    return (<section className={classes.container}>
        <header className ={classes.postHeader}>
            <img src={props.propsObj.userImgSrc} className={classes.userImg} />
            <p className={classes.userNameFont}>{props.propsObj.username}</p>
            <button className={classes.followLink} onClick={props.onFollowBtnClick}  title = 'Follow'>{ isPosterFollowed ? 'Unfollow' : 'Follow' }</button>
        </header>
        
        <main>
            <h1 className={classes.postTitle}>{props.propsObj.title}</h1>
            {props.propsObj.imgSrc ?
                (<img src={props.propsObj.imgSrc} className={classes.postImg}  />)
                : null}
            <p> {props.propsObj.description}</p>
            {props.propsObj.quote ?
            (<span> 
            <img style = {{ height: '90px'}} src = 'https://static.thenounproject.com/png/19279-200.png'/> 
            <h1 style = {{display: 'inline'}}><i/>{props.propsObj.quote}</h1>
             <img style = {{ height: '90px'}} src= 'https://static.thenounproject.com/png/19278-200.png'/> </span>)
            : null}
            
        </main>
        <footer>

            <div className = {classes.tags}>
                { props.propsObj.tags.map((tag, i) => <span key={i}>#{tag} </span> )}
            </div>
            <div className ={classes.actionContainer}>
                
                <div>
                    {/* <button onClick={props.onShareBtnClick}className={classes.actions}  title = 'Share' > {props.propsObj.isShare ? 'you shared' : '➣'}</button>                    
                    <button onClick={props.onReblogBtnClick}className={classes.actions}  title = 'Reblog'>{props.propsObj.isRebloged ? 'you rebloged' : '🔁'} </button> */}
                    <button onClick={props.onLikedBtnClick}className={`${classes.actions}  ${props.propsObj.isLiked ? classes.btnClick: ''}`}  title = 'Like'> {isLiked ? 'you liked' : '🍓'}</button>
                </div>


            </div>

        </footer>

    </section>)
}
export default postComponent;