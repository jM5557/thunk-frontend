import React, { Component } from 'react'
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
    render() {
      console.log("Thoughts.js", this.props.thoughts_)
        return (
          <div className = "thoughts-list">
            {
              
              this.props.thoughts_.map((myThoughts, i) => {
                
              return (
              <div className = "thought-item">
                <ThoughtPreview
                  key = {i}
                  inputPostId = {myThoughts.post.id}
                  myProps = {myThoughts} {...this.props}
                  startModalHandler = {this.props.startModalHandler}
                />
              </div>
            )}) }
          </div>
        )
    }
}
// {this.props.thoughts_.map((myThoughts, i) =>
//   <ThoughtPreview
//     key = {i}
//     inputPostId = {myThoughts.id}
//     myProps = {myThoughts} {...this.props}
//     startModalHandler = {this.props.startModalHandler}
//   />)}
