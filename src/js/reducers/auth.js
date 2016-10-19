import * as actionType from '../constants/actionType';
import { getAuthData, checkLogin } from '../utils/authService';

const initialState = {auth:{isLoggedIn:checkLogin(),authData:getAuthData(),isLoading:false}};

export default function (state = initialState, action) {
  switch(action.type) {
    case actionType.LOGIN_REQUEST:
      return {auth:{isLoggedIn:checkLogin(),authData:getAuthData(),isLoading:true}};
    case actionType.LOGIN_SUCCESS:
      return {auth:{isLoggedIn:checkLogin(),authData:getAuthData(),isLoading:false}};
    case actionType.LOGIN_ERROR:
      return {auth:{isLoggedIn:checkLogin(),authData:getAuthData(),isLoading:false}};
    case actionType.LOGOUT_SUCCESS:
      return {auth:{isLoggedIn:checkLogin(),authData:getAuthData(),isLoading:false}}
  }
  return state;
}
