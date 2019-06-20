import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index';
// import thoughtsData from './data/thoughts';
// import commentData from './data/comments';
import axios from 'axios';
import {getThoughtsAction} from './components/layout/ActionCreators'

export const getThoughts = () => {
  return async (dispatch) => {
    const {data} = await axios.get('https://thunk-api-19.herokuapp.com/api/v1/thought')
    dispatch(getThoughtsAction(data));
  }
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
