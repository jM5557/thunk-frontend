import React, { Component } from 'react';
import LoggedInMasterView from './components/layout/LoggedInMasterView';
import './scss/main.scss';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoggedInMasterView />
      </div>
    )
  }
}

