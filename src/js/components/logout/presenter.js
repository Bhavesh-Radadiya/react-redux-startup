import React, { Component } from 'react';

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }

  onLogout() {
    if(this.props.authData.isLoggedIn){
        this.props.logout(this.props.authData.authData.access_token);
    }
  }

  render() {
    return(
        <span onClick={this.onLogout.bind(this)}> Logout </span>
    );
  }
}
