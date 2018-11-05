import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/nav.scss';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/hero-page'>Hero Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
