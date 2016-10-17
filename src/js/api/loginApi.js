import * as api from '../constants/configUrl'
import fetch from 'isomorphic-fetch';

const postLoginRequest = (data) => {
  let loginCredentials = data.username + ':' +  data.password;
  let encriptCredentials = btoa(loginCredentials);
  return fetch(api.login,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': encriptCredentials
    },
  }).then(res=>res.json(),err=>err);
};

export default postLoginRequest;
