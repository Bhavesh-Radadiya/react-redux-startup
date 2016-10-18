import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li> <Link to="/home"> Home </Link> </li>
            <li> <Link to="/about"> About </Link> </li>
            <li> <Link to="/contactus"> Contact Us</Link> </li>
            <li> <Link to="/logout"> Logout </Link> </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
