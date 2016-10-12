import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div>
    <nav>
      <ul>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/about"> About </Link> </li>
        <li> <Link to="/contactus"> Contact Us</Link> </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
