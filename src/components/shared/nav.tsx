import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {useAppStateContext} from '../../store/app-context';

const Nav = (): JSX.Element => {
  const {userAuthenticated} = useAppStateContext();

  const getClassName = (navData: {isActive: boolean}) => {
    let linkClassName = 'nav__list-item__link';

    if (navData.isActive) {
      linkClassName += ' nav__list-item__link-active';
    }

    return linkClassName;
  };

  return (
    <nav className="navigation">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/hero-page" className={getClassName}>
            Example Page
          </NavLink>
        </li>
        <li className="nav__list-item nav__list-item-right">
          <NavLink to="/hero-page" className={getClassName}>
            {userAuthenticated ? 'Hello User!' : 'Not authenticated user!'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
