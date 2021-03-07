import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styles from './Header.module.css';
// import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Navigation from '../Header/Navigation';

const Header = () => {
  return (
    <AppBar position="static" className={styles.Menu}>
      <Toolbar variant="dense">
        <Navigation />
        {/* <NavLink
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
        </NavLink> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
