import React, { Component } from 'react';
import classes from './ShowLogin.module.css';
// import Button from '../Button/Button'
import Header from '../../Header/Header';
import Login from './Login'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';




// const showAbout = props => {

//  <div>First page</div>
// }

// export default showAbout


let height = window.innerHeight;



class ShowLogin extends Component {
    render() {
        return (
            
            <div   className={classes.container} style = {{height: height}}  >
        
                <div className = { classes.headerContainer}>
                    <Header />
                    
                    <Login/>
                    

                </div>
            </div>
         
           
            
        )
    }
}
export default ShowLogin