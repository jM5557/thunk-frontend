import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostPreviewList from './../posts/PostPreviewList';

import HeaderComponent from './../partials/header';
import Navbar from './../partials/navbar';

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
      console.log("I am logged in");
      return (
        <div className = "logged-in-view">

          <HeaderComponent />

          <Switch>
            <Route path = "/" component = { PostPreviewList } />
          </Switch>

          <Navbar />
        
        </div>
      )
    }
}
