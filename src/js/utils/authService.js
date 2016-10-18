function getAccessToken() {
  let data = JSON.parse(localStorage.authData);
  return data.token;
}

function getAuthData() {
  if(localStorage.authData){
        return JSON.parse(localStorage.authData);
  }
  else{
      return null;
  }
}

function checkLogin() {
  if ( localStorage.authData ) {
    return true;
  } else {
    return false;
  }
}

export {
  getAccessToken,
  getAuthData,
  checkLogin
}
