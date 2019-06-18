import React, { Component } from 'react'
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
    render() {
        return (
            <div>
                <p>{this.props.thoughts_.length}</p>
                <p>This is Thoughts</p>
                {this.props.thoughts_.map((myThoughts, i) => <ThoughtPreview key = {i} inputPostId = {myThoughts.id} myProps = {myThoughts} {...this.props}/>)}

            </div>
        )
    }
}
