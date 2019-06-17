import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class LoggedInMasterView extends Component {

    render() {
      console.log("I am logged in");
      return (
          <div>
              <p>logged in </p>
              <Link to ='/thoughts'>
              <button> Thoughts </button>
              </Link>
              <button> Search </button>
              <button> CreatePost </button>
              <button> Activities </button>
              <button> DashBoard </button>

          </div>
      )
    }
}
