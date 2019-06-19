import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
          <header className = "main-header">
            <Link to = "/" className = "logo-top">
            THUNK
            </Link>
            <h1>{this.props.location.pathname}</h1>
          </header>
        );
    }
}

export default withRouter(HeaderComponent);
