import React, { Component } from 'react';
import classes from './ShowLogin.module.css';
import Button from "../../UI/Button/Button";
import { NavLink } from 'react-router-dom';

class Info extends Component {
    render() {
        return(
        <>
            <section className={classes.information}>
                <div>
                    <h1>Before you continue, an update from us</h1>
                    Tumblr is now part of the Oath family. Please review Tumblr’s updated Terms of Service and European Privacy Policy. Due to EU data protection laws, we (Oath), our vendors and our partners need your consent to set cookies on your device to use your search, location and browsing data to understand your interests and personalise and measure ads on our products. Oath will also provide personalised ads to you on our partners’ products. Scroll down to review some privacy updates and set your preferences.
                    <br />
                    <strong>Tip: Log in to your account to avoid repeating this across your devices.</strong>

                    <h4>How data brings you better experiences</h4>
                    We want to provide you with the best experience on our products. Sometimes, we show you personalised ads by making educated guesses about your interests based on your activity on our sites and products. Learn more about how Oath uses this data.

                    <h4>Get personalised content and ads from our trusted partners</h4>
                    This doesn’t mean more ads, it means personalised ones. When you let our partners use cookies to collect similar to what we collect on our sites, they can provide ads that they think match your interests, and measure, report and analyse your interactions with them. Learn more about how our partners use this data, and select ‘Manage options’ to set your data sharing choices with our partners.

                    <h4>Bloggers and your data</h4>
                    When you visit a blog in the Tumblr network, that blog may collect more information than we do, and may provide information to third parties that we have no relationship with, including to advertisers. We aren't responsible for the information collection and use practices of our individual blogs and bloggers.

                    Select Accept to continue to Tumblr. Otherwise, you will not be able to access our sites and apps. Select ‘Manage options’ to set your data sharing choices with our partners. For more information and settings, go to the Privacy Dashboard.
                    <br />
                    <br />
                    <NavLink to="/login" className={classes.NavButton} >
                        <Button title="Log In"  />
                    </NavLink>
                </div>
            </section>
        </>
        )
    }
}

export default Info;