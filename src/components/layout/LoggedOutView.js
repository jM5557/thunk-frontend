import React, { Component } from 'react';
import axios from 'axios';

class LogInForm extends Component {


    handleUserLogin = () => {
        axios.get('https://thunk-api-19.herokuapp.com/api/v1/auth/google')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render () {
        return (
            <div className = "log-in-form form">
                <a className = "login-btn" href = "https://thunk-api-19.herokuapp.com/api/v1/auth/google">Log In With Google</a>
                <a className = "login-btn" href = "https://facebook.com">Log In With Facebook</a>
            </div>
        );
    }
}

export default class LoggedOutView extends Component {

    render() {
      return (
        <div className='logged-out-layout'>
          <div className='logged-out-inner' >

            <h1>Get Started</h1>

            <div><LogInForm /></div>

          </div>
        </div>
      );
    }
}
