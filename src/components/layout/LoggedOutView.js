import React, { Component } from 'react';

let logInForm = function () {
    return (
        <div className = "log-in-form form">
            <a className = "login-btn" href = "https://google.com">Log In With Google</a>
            <a className = "login-btn" href = "https://facebook.com">Log In With Facebook</a>
        </div>
    );
}

export default class LoggedOutView extends Component {

    constructor (props) {
        super(props);
    }

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
