import {createStore} from 'redux';
// import {syncHistoryWithStore} from 'react-router-redux';
// import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import thoughtsData from './data/thoughts';
import commentData from './data/comments';

const defaultState =
{
  thoughtsReducer: thoughtsData,
  commentsReducer: commentData,
};


const store = createStore(rootReducer, defaultState);
// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
