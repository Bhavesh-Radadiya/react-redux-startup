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

function requireAuth(nextState, replace) {
  if(!checkLogin()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }

}

export {
  getAccessToken,
  getAuthData,
  checkLogin,
  requireAuth
}
