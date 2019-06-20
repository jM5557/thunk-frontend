import React, { Component } from 'react';

export default class SingleComment extends Component {
  render() {
    return (
      <div className='comment-item'>
        {this.props.data.text}
        <button>View</button>
      </div>
    );
  }
}
