import React, { Component } from 'react';
import { Link } from 'react-router';
import Logout from '../logout';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AppNav extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar>
          <Nav>
            <LinkContainer to="/home">
              <NavItem eventKey={1}> Home </NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}> About </NavItem>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <NavItem eventKey={3}> Contact Us </NavItem>
            </LinkContainer>
              {this.props.authData.isLoggedIn ? <NavItem eventKey={4}><Logout /></NavItem> : '' }
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNav;
