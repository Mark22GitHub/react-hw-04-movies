import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styles from './Header.module.css';
import Navigation from '../Header/Navigation';

const Header = () => {
  return (
    <AppBar position="static" className={styles.Menu}>
      <Toolbar variant="dense">
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
