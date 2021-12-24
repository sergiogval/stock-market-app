import React from 'react';
import { Link } from 'react-router-dom';
import PopIcon from '../assets/images/paid.svg';
import GainIcon from '../assets/images/trending_up.svg';
import LoseIcon from '../assets/images/trending_down.svg';
import allIcon from '../assets/images/account_balance.svg';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <Link to="/popular" className="navLink">
        <li className="second-color main-popular">
          <img src={PopIcon} alt="pop icon" />
          <p>Popular</p>
        </li>
      </Link>
      <Link to="/gainers" className="navLink">
        <li className="first-color main-gainers">
          <img src={GainIcon} alt="gain icon" />
          <p>Gainers</p>
        </li>
      </Link>
      <Link to="/losers" className="navLink">
        <li className="first-color main-losers">
          <img src={LoseIcon} alt="lose icon" />
          <p>Losers</p>
        </li>
      </Link>
      <Link to="/allstocks" className="navLink">
        <li className="second-color main-allstocks">
          <img src={allIcon} alt="all icon" />
          <p>All stocks</p>
        </li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
