import React,{Fragment} from 'react';
import Thoughts from './posts/Thoughts';
import SingleThought from './posts/SingleThought';
import CreateThought from './posts/CreateThought';
import HeaderComponent from './partials/header';
import Navbar from './partials/navbar';

import '../scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from './modals/Modal';
import ModalBackdrop from './modalBackdrop/ModalBackdrop';
import Settings from './user/Account/Settings';
import Activity from './user/Account/Activity';

class Main extends React.Component{
  state = {
    creating_: false,
    confirmReport_: false
  };

  modalCancelHandler = () => {
    this.setState({ creating_: false });
  };

  modalReportHandler = () => {
    this.setState({ creating_: false });
  };

  startModalHandler = () => {
    this.setState({ creating_: true });
  };

  confirmReport_Handler = () => {};

  render(){
    console.log("MAIN");
    return(
      <Router>
        <HeaderComponent />
        <div className = "page-content">
            {this.state.creating_ && <ModalBackdrop />}
            {this.state.creating_ && (
              <Modal title='Report' canCancel canReport onCancel={this.modalCancelHandler} onReport={this.confirmReport_Handler} >
              <h2>Reporting this content for...</h2>
              <div className='radio-buttons'>
                <label> <input type='radio' /> Hate speech post. Might hurt others </label>
                <label> <input type='radio' /> Inappropriate post. </label>
                <label> <input type='radio' /> Posting personal information. </label>
              </div>
              </Modal>
              )}

          <Switch>
            <Route exact path = "/" component = {()=>
                <Thoughts
                startModalHandler = {this.startModalHandler}
                {...this.props}/>} />
            <Route exact path = "/thoughts/:id" component = {()=>
              <SingleThought
                startModalHandler = {this.startModalHandler}
                {...this.props}/>} />
            <Route exact path = "/thoughts" component = {()=>
              <Thoughts
                startModalHandler = {this.startModalHandler}
                {...this.props}/>} />

            <Route exact path = "/activity" component = { Activity }  />

            <Route exact path = "/create/thought" component = {()=>
              <CreateThought {...this.props}/>}/>

            <Route exact path = "/settings" component = { Settings }/>
          </Switch>
          </div>
        <Navbar/>
      </Router>
      )
    }
  };

export default Main;
// <Route exact path = "/main" component = {()=> <LoggedInMasterView {...this.props}/>}/>
