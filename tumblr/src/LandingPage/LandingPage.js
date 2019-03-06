import React, { Component } from 'react';
import ShowLogin from '../AboutTumblr/ShowLogin/ShowLogin';
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
            <Carousel 
                showThumbs={false} 
                axis={"vertical"}>
                <ShowLogin />
                  

                <ShowAbout />

            </Carousel>
        );
    }
};

//  ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
