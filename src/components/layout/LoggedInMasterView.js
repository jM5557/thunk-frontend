import React, { Component } from 'react';

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
          console.log(pos_dat.coords.latitude);
          this.setState({
            loc: { 
              long: pos_dat.coords.latitude,
              lat: pos_dat.coords.longitude
            },
            timestamp: new Date().toLocaleTimeString()
          });
        }); 
      }, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.interval);
    }
      
    fetchGeolocationData (some_func) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => { some_func(pos) }, function() {

          console.log("Could not retrieve user location data");

        });
      } else {
        // Browser doesn't support Geolocation
        console.log('Your browser does not support location tracking. Please update or switch to a new browser.');
      }
    }

    render() {
      console.log(this.state.loc.lat + ", " + this.state.loc.long + " | " + this.state.timestamp);
      return (
          <div>
              
          </div>
      )
    }
}
