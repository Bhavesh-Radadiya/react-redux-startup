import React from 'react';
import { connect } from 'react-redux';
import Logout from './presenter';
import { logoutRequest, logoutSuccess, logoutError } from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps = (state) => {
  const authData = state.auth.auth;
  return {
    authData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (data) => {
      let res = dispatch(logoutRequest(data));
      res.payload.then(response =>{
        localStorage.removeItem('authData');
        dispatch(logoutSuccess(response));
        browserHistory.push('/');
      },err => {
        dispatch(logoutError(err));
      });
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Logout);
