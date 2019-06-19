import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className = "main-nav">
                <Link to = "/thoughts">Thoughts</Link>
                <Link to = "/search">Search</Link>
                <Link to = "/create-thought">Add Thought</Link>
                <Link to = "/activity">Activity</Link>
                <Link to = "/dashboard">Dashboard</Link>
            </nav>
        )
    }
}
