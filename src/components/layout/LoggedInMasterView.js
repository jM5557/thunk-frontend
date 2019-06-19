import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostPreviewList from './../posts/PostPreviewList';
import {Link} from 'react-router-dom';
import Header from './../partials/Header';
import Navbar from './../partials/Navbar';

export default class LoggedInMasterView extends Component {
    constructor (props) {

        super(props);

        this.state = {
            loc: {},
            timestamp: new Date().toLocaleTimeString()
        }

        this.fetchGeolocationData = this.fetchGeolocationData.bind(this);
    }

    componentDidMount() {
      this.interval = setInterval(() => {

        this.fetchGeolocationData( (pos_dat) => {

          this.setState({
            loc: {
              long: pos_dat.coords.latitude,
              lat: pos_dat.coords.longitude
            },
            timestamp: new Date().toLocaleTimeString()
          });
        });

      }, 60000);
    }

    componentWillUnmount(){
      clearInterval(this.interval);
    }

    fetchGeolocationData (some_func) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => { some_func(pos) }, function () {

          console.log("Could not retrieve user location data");

        });
      } else {
        // Browser doesn't support Geolocation
        console.log('Your browser does not support location tracking. Please update or switch to a new browser.');
      }
    }

    render() {
      return (

        <div className = "logged-in-view">
        <p>This is LoggedInMasterView</p>
          <Header />

          <Switch>
            <Route path = "/" component = { PostPreviewList } />
          </Switch>
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

          <Navbar />

        </div>
      )
    }
}
