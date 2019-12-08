import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const NavStyle = {
    color: 'white'
  }
  return (
    <div className="Nav">
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={NavStyle} to='/about'>
          <li>About</li>
          </Link>
          <Link style={NavStyle} to='/shop'>
          <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
