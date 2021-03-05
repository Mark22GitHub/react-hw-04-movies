import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <Spinner
      className={styles.Spinner}
      type="BallTriangle"
      color={'#3f51b5'}
      height={80}
      width={80}
    />
  );
};

export default Loader;
