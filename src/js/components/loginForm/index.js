import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './presenter';
import { loginRequest, loginSuccess, loginError } from '../../actions';
import { browserHistory } from 'react-router';

const mapStateProps =(state) => {
  const authData = state.auth.auth;
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
        let authData = {
          userId: response.userId,
          access_token: response.access_token,
          userRole: response.userDetails.userRole
        }
        localStorage.setItem('authData',JSON.stringify(authData));
        dispatch(loginSuccess(authData));
        browserHistory.push('/home');
      },err=>{
        dispatch(loginError(JSON.stringify(err)));
      });
    }
  };
};

export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
