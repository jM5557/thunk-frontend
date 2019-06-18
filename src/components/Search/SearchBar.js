import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className='searchbar-header'>
        <section className='search-section'>
          <input type='text' placeholder='Search...' />
          <button className='cancel-search'>Cancel</button>
        </section>
        <section className='tabs'>
          <button className='best-tab'>Best</button>
          <button className='hashtag-tab'>#Tag</button>
          <button className='worst-tab'>Worst</button>
        </section>
      </div>
    );
  }
}

export default SearchBar;
