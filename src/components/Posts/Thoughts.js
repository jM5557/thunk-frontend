import React, { Component } from 'react';
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
    constructor (props) {
      super(props);
    }

    render() {
      console.log("Thoughts.js", this.props.inputThoughts)
        return (
          <div className = "thoughts-list">
            { this.props.inputThoughts.map((myThoughts, i) =>
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
