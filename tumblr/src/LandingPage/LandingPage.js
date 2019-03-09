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
