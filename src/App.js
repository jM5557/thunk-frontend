import React, { Component } from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedInMasterView from './components/layout/LoggedInMasterView';
import LoggedOutView from './components/layout/LoggedOutView';

export default class App extends Component {
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
            <Route component={LoggedOutView} />
          ) : (
            <Route component={LoggedInMasterView} />
          )}
        </Switch>
      </Router>
    );
  }
}
