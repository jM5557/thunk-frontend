import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class LoggedInMasterView extends Component {
    render() {
      return (
          <div>
              <p>logged in </p>
              <Link to ='/thoughts'>
              <button> Thoughts </button>
              </Link>
              <button> Search </button>
              <Link to ='/create-thought'>
              <button> CreatePost </button>
              </Link>
              <button> Activities </button>
              <button> DashBoard </button>

          </div>
      )
    }
}
