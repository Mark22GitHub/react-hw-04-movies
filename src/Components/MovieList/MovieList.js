import React from 'react';
import styles from './MovieList.module.css';
import { Link, withRouter } from 'react-router-dom';
import SingleMovie from '../SingleMovie/SingleMovie';
import PropTypes from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.MovieList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.MovieCard}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <SingleMovie poster_path={poster_path} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
