import React, { Component } from 'react';

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(this.props.authData.isLoggedIn){
        this.props.logout(this.props.authData.authData.access_token);
    }
  }

  render() {
    return(
      <div>
        <span> Loadding.... </span>
      </div>
    );
  }
}
