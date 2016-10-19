import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logoutRequest, logoutSuccess, logoutError } from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps = (state) => {
  const authData = state.auth.auth;
  return {
    authData
  };
}

export default connect(mapStateProps)(Nav);
