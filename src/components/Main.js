import React from 'react';
import LoggedOutView from './layout/LoggedOutView';
import LoggedInMasterView from './layout/LoggedInMasterView';
import Thoughts from './posts/Thoughts';
import SingleThought from './posts/SingleThought';
import CreateThought from './posts/CreateThought';
import '../scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends React.Component{
    render(){
      return(
        <Router>
          <Switch>
            <Route exact path = "/" component = {()=><LoggedOutView {...this.props}/>}/>
            <Route exact path = "/main" component = {()=> <LoggedInMasterView {...this.props}/>}/>
            <Route exact path = "/thoughts/:id" component = {()=> <SingleThought {...this.props}/>}/>
            <Route exact path = "/thoughts" component = {()=> <Thoughts {...this.props}/>}/>
            <Route exact path = "/create-thought" component = {()=> <CreateThought {...this.props}/>}/>

          </Switch>
        </Router>
      )
    }
  };

export default Main;
