import React, { Component } from 'react'

export default class Comments extends Component {
    render() {
      console.log("This is Comments.js", this.props);
        return (
            <div>
                <p>This is Comment</p>
            </div>
        )
    }
}
