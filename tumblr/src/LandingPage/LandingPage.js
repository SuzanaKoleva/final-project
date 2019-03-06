import React, { Component } from 'react';
import ShowLogin from '../AboutTumblr/ShowLogin/ShowLogin';
import ShowAbout from '../AboutTumblr/ShowAbout/ShowAbout';


class LandingPage extends Component {
    render() {
        return (
            
            <div >

                <ShowLogin />
                <ShowAbout />
            </div>
        )
    }
}
export default LandingPage