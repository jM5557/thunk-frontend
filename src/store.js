import {createStore} from 'redux';
// import {syncHistoryWithStore} from 'react-router-redux';
// import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import thoughtsData from './data/thoughts';
import commentData from './data/comments';
import axios from 'axios';

let thoughts_data = [];
let id = [];

axios.get('https://thunk-api-19.herokuapp.com/api/v1/user/')
  .then(( response ) => {
    thoughts_data = response.data;
    
    console.log(response.data);
  })
  .catch( (err) => {
    console.log('Fail');
  } )

const defaultState =
{
  thoughtsReducer: thoughtsData,
  commentsReducer: commentData,
};


const store = createStore(rootReducer, defaultState);
// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
