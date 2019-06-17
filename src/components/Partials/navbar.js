import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className = "main-nav">
                <Link to = "/">Home</Link>
                <Link to = "/search">Search</Link>
                <Link to = "/add">Add Post</Link>
                <Link to = "/activity">Activity</Link>

            </nav>
        )
    }
}
