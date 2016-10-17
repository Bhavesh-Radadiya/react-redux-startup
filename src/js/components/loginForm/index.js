import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './presenter';
import { loginRequest, loginSuccess, loginError } from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps =(state) => {
  const authData = state;
  return {
    authData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (data) => {
      let req = dispatch(loginRequest(data));
      req.payload.then(response => {
        console.log(response);
        dispatch(loginSuccess(response));
        browserHistory.push('/home');
      },err=>{
        dispatch(loginError(JSON.stringify(err)));
      });
    }
  };
};

export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
