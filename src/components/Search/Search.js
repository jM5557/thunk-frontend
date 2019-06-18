import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className='page-nav'>
        <i className='fas fa-search' />
        <input placeholder='Search...' />
      </div>
    );
  }
}

export default Search;
