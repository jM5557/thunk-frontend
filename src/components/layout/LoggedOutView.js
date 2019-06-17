import React, { Component } from 'react'

export default class LoggedOutView extends Component {
    render() {
        return (
            <div className = "logged-out-layout">
                <div className = "logged-out-inner">
                     <h1>Get Started</h1>
                    <button className = "login-btn">Sign In</button>
                    <button className = "login-btn register-btn">Register</button>

                    <a href = "#" className = "forgot-password">Forgot your password?</a>
                </div>
            </div>
        )
    }
}
