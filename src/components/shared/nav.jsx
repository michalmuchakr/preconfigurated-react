import React from 'react';
import {NavLink} from 'react-router-dom';
import 'styles/nav.scss';

import {useAppStateContext} from 'app-context.jsx';

const Nav = () => {
  const {userAuthenticated} = useAppStateContext();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink
            exact
            to="/"
            className="nav__list-item__link"
            activeClassName="nav__list-item__link-active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            exact
            to="/example-page"
            className="nav__list-item__link"
            activeClassName="nav__list-item__link-active"
          >
            Example Page
          </NavLink>
        </li>
        <li className="nav__list-item nav__list-item-right">
          <NavLink
            exact
            to="/hero-page"
            className="nav__list-item__link"
            activeClassName="nav__list-item__link-active"
          >
            {userAuthenticated ? 'Hello User!' : 'Not authenticated user!'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
