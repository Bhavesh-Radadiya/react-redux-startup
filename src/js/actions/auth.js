import * as actionType from '../constants/actionType';
import postLoginRequest from '../api/loginApi'
function loginRequest(data) {
  return {
    type: actionType.LOGIN_REQUEST,
    payload: postLoginRequest(data)
  };
}

function loginSuccess() {
  return {
    type: actionType.LOGIN_SUCCESS,
    payload:''
  };
}

function loginError() {
  return {
    type: actionType.LOGIN_ERROR,
    payload:''
  }
}

export {
  loginRequest,
  loginSuccess,
  loginError
}
