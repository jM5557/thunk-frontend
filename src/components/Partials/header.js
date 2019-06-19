import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.location.pathname.slice(1)
    };
  }
  render() {
    let headerText = '';

    switch (this.props.location.pathname.slice(1)) {
      case 'posts':
        headerText = 'News Feed';
        break;
      case 'activity':
        headerText = 'My Activity';
        break;
      default:
        headerText = '';
    }

    return (
      <header className='main-header'>
        {this.props.location.pathname.slice(1) === 'search' ? (
          <SearchBar />
        ) : (
          <div className='header-inner'>
            <Link to='/' className='logo-top'>
              Thunk!
            </Link>
            <h1>{headerText}</h1>
          </div>
        )}

        <Link to='/settings' className='user-settings'>
          <i className='fas fa-cog' />
          <p>Account Settings</p>
        </Link>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
