import * as actionType from '../constants/actionType';
const initialState = {auth:{authData:''}};

export default function (state = initialState, action) {
  switch(action.type) {
    case actionType.LOGIN_REQUEST:
      return {auth:{authData:'data'}};
    case actionType.LOGIN_SUCCESS:
      return {auth:{authData:true}};
    case actionType.LOGIN_ERROR:
      return {auth:{authData:false}};
  }
  return state;
}
