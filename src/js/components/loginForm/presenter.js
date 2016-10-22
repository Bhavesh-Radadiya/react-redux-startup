import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email:'', password:'',}
  }

  componentDidMount(){
    if(this.props.authData.isLoggedIn){
        browserHistory.push('/home');
    }
  }

  emailChangeHandler(e) {
    this.setState({email:e.target.value});
  }

  passwordChangeHandler(e) {
    this.setState({password:e.target.value});
  }

  submitForm(e) {
    e.preventDefault();
    let loginData = {
      "username": this.state.email,
      "password": this.state.password
    };
    this.props.loginRequest(loginData);
  }

  render() {
    return(
      <div>
        <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 login-container">
          <div className="panel panel-default">
            <form onSubmit={this.submitForm.bind(this)}>
              <div className="panel-body">
              <FormGroup controlId="formInlineName">
                <ControlLabel> User Name </ControlLabel>
                <FormControl type="email" placeholder="Email" onChange={this.emailChangeHandler.bind(this)}/>
              </FormGroup>
              <FormGroup controlId="formInlineName">
                <ControlLabel> Password </ControlLabel>
                <FormControl type="password" placeholder="password" onChange={this.passwordChangeHandler.bind(this)}/>
              </FormGroup>
              </div>
              <div className="panel-footer">
                <button type="submit" className="btn btn-default"> Login </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
