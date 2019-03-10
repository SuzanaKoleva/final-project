import React, { Component } from 'react';
import ShowLogin from '../AboutTumblr/ShowLogin/ShowLogin';
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout';
import ShowTumblrBlogs from '../AboutTumblr/ShowTumblrBlogs/ShowTumblrBlogs';
import ShowTumblr from '../AboutTumblr/ShowTumblr/ShowTumblr';
import ShowLastSlide from '../AboutTumblr/ShowLastSlide/showLastSlide';
import Header from "../Header/Header";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from "./LandingPage.module.css";


class LandingPage extends Component {
    render() {
        return (
            
            <DemoCarousel/>
        )
    }
}
export default LandingPage

class DemoCarousel extends Component {
     
    // scrollList = window.addEventListener('wheel', event => {
    //     var keyUp = 38;
    //     var keyDown = 40;
    //     if(event.deltaY < 0) {
    //         var x = document.createEvent("MouseEvent");
    //         x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    //         window.dispatchEvent(x);
    //     }
    //     if(event.deltaY > 0) {
    //         console.log('40');
    //     }
    // })
    render() {
        return (
            <>
            {/* <Header /> */}
            <Carousel 
                showThumbs={false} 
                showArrows={false}
                showStatus={false}
                showIndicators={true}
                useKeyboardArrows={true}
                onChange={this.scrollList}
                axis={"vertical"}>
                <ShowLogin />
                <ShowAbout />
                <ShowTumblrBlogs />
                <ShowTumblr />
                <ShowLastSlide />
            </Carousel>
            </>
        );
    }
};

//  ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
