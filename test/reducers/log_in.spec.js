import test from 'ava';
import auth from '../../src/js/reducers/auth';
import { loginRequest, loginSuccess } from '../../src/js/actions/auth';
import { getAuthData, checkLogin } from '../../src/js/utils/authService';
// import { localStorage } from 'localStorage';
let localStorage = require('localStorage');

test('Auth reducer', t => {
  console.log(localStorage);
  const prevState = {auth:{isLoggedIn:null,authData:null,isLoading:false}};
  const nextState = auth(prevState,loginRequest('das'));
  t.deepEqual(nextState,{auth:{isLoggedIn:null,authData:null,isLoading:true}});
});
// test('Auth reducer', t => {
//   console.log(localStorage.getItem(authData));
  // const prevState = {auth:{isLoggedIn:null,authData:null,isLoading:false}};
  // const nextState = auth(prevState,loginSuccess());
  // t.deepEqual(nextState,{auth:{isLoggedIn:checkLogin(),authData:getAuthData(),isLoading:true}});
// });
