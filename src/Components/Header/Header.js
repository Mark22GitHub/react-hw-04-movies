import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static" className={styles.Menu}>
      <Toolbar variant="dense">
        <NavLink
          exact
          to="/"
          className={styles.NavLink}
          activeClassName={styles.NavLink__Active}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={styles.NavLink}
          activeClassName={styles.NavLink__Active}
        >
          Movies Page
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
