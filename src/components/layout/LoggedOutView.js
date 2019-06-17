import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class LoggedOutView extends Component {
    render() {
      console.log("This is loggedout.js", this.props);

        return (
            <div className = "logged-out-layout">
                <div className = "logged-out-inner">
                     <h1>Get Started</h1>
                     <Link to = '/main'>
                    <button className = "login-btn">Sign In</button>
                    </Link>
                    <button className = "login-btn register-btn">Register</button>

                    <a href = "#" className = "forgot-password">Forgot your password?</a>
                </div>
            </div>
        )
    }
}
