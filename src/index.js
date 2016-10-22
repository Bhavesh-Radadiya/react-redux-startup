import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './js/components/app';
import Home from './js/components/home';
import About from './js/components/about';
import LoginForm from './js/components/loginForm'
import configStore from './js/store/configStore';
import Contactus from './js/components/contactus';
import Logout from './js/components/logout'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { requireAuth } from './js/utils/authService';

require('./assets/styles/index.scss');

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store = {store}>
    <Router history={history}>
      <Route path = "/" component = {App}>
        <IndexRoute component = {LoginForm} />
        <Route onEnter={requireAuth}>
          <Route path="home" component={Home} />
          <Route path="logout" component={Logout} />
          <Route path="contactus" component={Contactus} />
          <Route path="about" component={About} />
        </Route>
      </Route>

    </Router>
  </Provider>,
  document.getElementById('root'));
