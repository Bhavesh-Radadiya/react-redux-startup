import * as api from '../constants/configUrl'
import fetch from 'isomorphic-fetch';

const postLoginRequest = (data) => {
  return fetch(api.login,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': data
    },
  }).then(res=>res.json(),err=>err);
};

const postLogoutRequest = (access_token) => {
  return fetch(api.logout,{
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'access_token': access_token
    }
  }).then(res=>res.json(),err=>err);
}

export {
  postLoginRequest,
  postLogoutRequest
};
