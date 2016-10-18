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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (data) => {
      let res = dispatch(logoutRequest(data));
      res.payload.then(response =>{
        dispatch(logoutSuccess());
      },err => {
        dispatch(logoutError());
      });
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Nav);
