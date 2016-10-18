import * as actionType from '../constants/actionType';
import { postLoginRequest, postLogoutRequest } from '../api/loginApi'
function loginRequest(data) {
  return {
    type: actionType.LOGIN_REQUEST,
    payload: postLoginRequest(data)
  };
}

function loginSuccess(data) {
  return {
    type: actionType.LOGIN_SUCCESS,
    payload: data
  };
}

function loginError(err) {
  return {
    type: actionType.LOGIN_ERROR,
    payload: err
  }
}

function logoutRequest(data) {
  return {
    type: actionType.LOGOUT_REQUEST,
    payload: postLogoutRequest(data)
  }
}

function logoutSuccess(data) {
  return {
    type: actionType.LOGOUT_SUCCESS,
    payload: data
  }
}

function logoutError(err) {
  return {
    type: actionType.LOGOUT_ERROR,
    payload: err
  }
}

export {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError
}
