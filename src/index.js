import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import myStore from './store';


const router = (
  <Provider store = {myStore}>
    <App />
  </Provider>
);

render (router, document.getElementById('root'));
