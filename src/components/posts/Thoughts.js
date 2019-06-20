import React, { Component } from 'react';
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
    render() {
      console.log("Thoughts.js", this.props.thoughts_)
        return (
          <div className = "thoughts-list">
            { this.props.thoughts_.map((myThoughts, i) =>
              <div className = "thought-item" key = {i}>
                <ThoughtPreview
                  index = {i}
                  myProps = {myThoughts} {...this.props}
                  startModalHandler = {this.props.startModalHandler}
                />
              </div>
            )}
          </div>
        )
    }
}
