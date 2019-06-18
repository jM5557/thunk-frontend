import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='main-nav'>
        <Link to='/'>
          <i class='fas fa-home' />
        </Link>
        <Link to='/search'>
          <i className='fas fa-search' />
        </Link>
        <Link to='/add'>
          <i className='fas fa-plus-square' />
        </Link>
        <Link to='/activity'>
          <i className='fas fa-sticky-note' />
        </Link>
      </nav>
    );
  }
}
