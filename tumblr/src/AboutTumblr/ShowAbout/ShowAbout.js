import React, { Component } from 'react';
import classes from './ShowAbout.module.css';
import Button from '../Button/Button'
import Header from '../../Header/Header';




// const showAbout = props => {

//  <div>First page</div>
// }

// export default showAbout

const loginButton = {
    color: 'black',
    backgroundColor: '#ffffff',
}
let height = window.innerHeight;



class ShowAbout extends Component {
    render() {
        return (
            <div   className={classes.container} style = {{height: height}}  >
        
                <div className = { classes.headerContainer}>
                    <Header />
                    <div className={classes.middle}>
                        <div className = {classes.loginContainer}>
                            <h1 className={classes.title}> tumblr </h1>
                            <p className={classes.text}>Come for what you love.
                <br />
                                Stay for what you discover.
                </p>
                            <Button title="Get started" />

                            <Button title="Log In" style={loginButton} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowAbout