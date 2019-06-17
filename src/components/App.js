import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import *as actionCreators from '../actions/ActionCreators';
import Main from './Main';

function mapStateToProps(state)
{
  return{
    thoughts_: state.thoughtsReducer,
    comments_: state.commentsReducer,
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
// import React from 'react';
// import {render} from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import {Provider} from 'react-redux';
// import store, {history} from '../../store';
//
//
// function test() {
//   return (
//     <div >
//
//         <p>
//           Inside of test2
//         </p>
//
//     </div>
//   );
// }
//
// export default test;
