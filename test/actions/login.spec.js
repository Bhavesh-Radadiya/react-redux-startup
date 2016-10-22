import test from 'ava';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actionType from '../../src/js/constants/actionType';
import nock from 'nock';
import { loginRequest, loginSuccess } from '../../src/js/actions';

test('network call', t => {
  return new Promise((resolve, reject) => {
    const middlewares = [thunkMiddleware]
    const mockStore = configureMockStore([thunkMiddleware]);
     const store = mockStore({})
     const req = store.dispatch(loginRequest('sddsd'))
     req.payload.then(res=>{
       resolve();
     },err=>{
       reject();
     });
  });
});
