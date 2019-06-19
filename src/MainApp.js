import React, { Component } from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedInMasterView from './components/layout/LoggedInMasterView';
import LoggedOutView from './components/layout/LoggedOutView';
import App from './components/App';

export default class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          {!this.state.isLoggedIn ? (
            <Route path = "/" component={LoggedOutView} />
          ) : (
            <div className = "logged-in-view">
              <Route component={ App } />
            </div>
          )}
        </Switch>
      </Router>
    );
  }
}
