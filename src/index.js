import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import LoggedOutView from './components/layout/LoggedOutView';
import LoggedInMasterView from './components/layout/LoggedInMasterView';
import Thoughts from './components/posts/Thoughts';
import ThoughtPreview from './components/posts/ThoughtPreview';
import SingleThought from './components/posts/SingleThought';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import myStore from './store';


const router =
(
  <Provider store = {myStore}>
    <App/>
  </Provider>
)

render (router, document.getElementById('root'));


// import React from 'react';
// import {render} from 'react-dom';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Test from './components/testKyo/test';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<Test />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
