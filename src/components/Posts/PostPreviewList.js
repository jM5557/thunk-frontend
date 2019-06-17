import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostPreview from './PostPreview';

class PostPreviewList extends Component {
  state = {
    Posts: [],
    loading: false
    };
  };
  render() {
    return (
      <div className="Post-Preview-List-Wrapper">
        <PostPreview 
      </div>
    )
}

export default PostPreviewList;
