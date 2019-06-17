import React from 'react';
import {render} from 'react-dom';
import Test from './components/testKyo/test';
import {Provider} from 'react-redux';
import myStore from './store';


const router = (
  <Provider store = {myStore}>
    <Test />
  </Provider>
);

render (router, document.getElementById('root'));
