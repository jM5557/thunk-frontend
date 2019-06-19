import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let logInForm = function () {
    return (
        <div className = "log-in-form form">
            <a className = "login-btn" href = "https://google.com">Log In With Google</a>
            <a className = "login-btn" href = "https://facebook.com">Log In With Facebook</a>
            <Link to = '/main'>
            <button className = "login-btn">Sign In</button>
            </Link>
        </div>
    );
}

export default class LoggedOutView extends Component {

    render() {
      return (
        <div className='logged-out-layout'>
          <div className='logged-out-inner' >

            <h1>Get Started</h1>

            <div>{ logInForm() }</div>

          </div>
        </div>
      );
    }
}
