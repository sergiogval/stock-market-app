import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <Link to="/popular" className="navLink">
        <li>Popular</li>
      </Link>
      <Link to="/gainers" className="navLink">
        <li>Gainers</li>
      </Link>
      <Link to="/losers" className="navLink">
        <li>Losers</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
