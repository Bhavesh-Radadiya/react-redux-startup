import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './js/reducers'
import App from './js/components/App'

const store = createStore(allReducers);

ReactDom.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
