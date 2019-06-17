import React, { Component } from 'react'
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
    render() {
      console.log("This is Thoughts.js", this.props);
        return (
            <div>
                <p>This is Thoughts</p>
                {this.props.thoughts_.map((myThoughts, i) => <ThoughtPreview key = {i} inputPostId = {myThoughts.id} myProps = {myThoughts} {...this.props}/>)}
            </div>
        )
    }
}
