import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import *as actionCreators from '../actions/ActionCreators';
import Main from './Main';

function mapStateToProps(state){
  return{
    thoughts_: state.thoughtsReducer,
    comments_: state.commentsReducer,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
