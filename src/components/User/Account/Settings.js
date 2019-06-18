import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (
            <div className = "user-settings">
                <ul>

                    <button>
                        Change Distance Radius
                    </button>

                    <button className = "log-out-btn">Log Out</button>

                </ul>
            </div>
        )
    }
}
