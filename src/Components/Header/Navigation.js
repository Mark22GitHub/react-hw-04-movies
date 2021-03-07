import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavLink}
        activeClassName={styles.NavLink__Active}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={styles.NavLink}
        activeClassName={styles.NavLink__Active}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
