import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (
            <div className = "settings-page content-page">
                <div className = "settings-page-content">
                    <button>
                        Change Distance Radius
                    </button>

                    <button className = "log-out-btn">
                        Log Out
                    </button>
                </div>
            </div>
        )
    }
}
