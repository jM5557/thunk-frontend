import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostPreview from './PostPreview';

class PostPreviewList extends Component {
  state = {
    Posts: [
      {
        id: 1,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 0,
        downvotes: 0,
        text: "This is a thought I once had. Isn't it cool huh?",
        longitude: 297,
        latitude: 325
      },
      {
        id: 2,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 9,
        downvotes: 0,
        text: 'This is a test that will hopefully work in time',
        longitude: 567,
        latitude: 325
      },
      {
        id: 3,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 5,
        downvotes: 0,
        text: 'This is in the future and the past',
        longitude: 400,
        latitude: 325
      },
      {
        id: 4,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 5,
        downvotes: 0,
        text: 'This is in the future and the past',
        longitude: 400,
        latitude: 325
      },
      {
        id: 5,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 5,
        downvotes: 0,
        text: 'This is in the future and the past',
        longitude: 400,
        latitude: 325
      },
      {
        id: 6,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 5,
        downvotes: 0,
        text: 'This is in the future and the past',
        longitude: 400,
        latitude: 325
      }
    ],
    loading: false
  };

  render() {
    return (
      <div className = "post-preview-list">
        {this.state.Posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostPreviewList;
