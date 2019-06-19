import React, { Component } from 'react';

export default class SingleComment extends Component {
  render() {
    return (
      <div className='comment-item'>
        x<div className='text'>{this.props.data.text}</div>
        <div className='controls-bar'>
          <button className='report'>Flag</button>
        </div>
      </div>
    );
  }
}
