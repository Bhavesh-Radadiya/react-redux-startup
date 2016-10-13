import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './js/reducers'
import Home from './js/components/home/home';
import About from './js/components/about';
import Contactus from './js/components/contactus';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = createStore(allReducers);

ReactDom.render(
  <Provider store = {store}>
    <Router history={browserHistory}>
      <Route path = "/" component = {Home}/>
      <Route path = "/about" component = {About}/>
      <Route path = "/contactus" component = {Contactus}/>
    </Router>
  </Provider>,
  document.getElementById('root'));
