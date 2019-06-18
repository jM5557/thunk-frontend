import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    const path = this.props.location.pathname.slice(1);

    let headerText = '';

    switch (path) {
      case 'posts':
        headerText = 'News Feed';
        break;
      case 'activity':
        headerText = 'My Activity';
        break;
      case 'search':
        headerText = 'Search By Tag';
        break;
      default:
        headerText = '';
    }

    return (
      <header className='main-header'>
        <Link to='/' className='logo-top'>
          Thunk!
        </Link>
        <h1>{headerText}</h1>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
