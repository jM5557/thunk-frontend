import React, { Component } from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoggedInMasterView from './components/layout/LoggedInMasterView';
import LoggedOutView from './components/layout/LoggedOutView';
import PostPreview from './components/posts/PostPreview';

export default class App extends Component {
  // constructor (props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>

        <Switch>
          <Route component = { LoggedInMasterView } />
        </Switch>

      </Router>
    )
  }
}

