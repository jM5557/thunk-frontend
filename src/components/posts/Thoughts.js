import React, { Component } from 'react';
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
  render() {
    return (
      <div className='logged-in-view'>
        <div>
          {this.props.thoughts_.map((myThoughts, i) => (
            <ThoughtPreview
              key={i}
              inputPostId={myThoughts.id}
              myProps={myThoughts}
              {...this.props}
              startModalHandler={this.props.startModalHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
