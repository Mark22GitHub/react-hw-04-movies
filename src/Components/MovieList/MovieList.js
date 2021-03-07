import React from 'react';
import styles from './MovieList.module.css';
import { Link, withRouter } from 'react-router-dom';

import SingleMovie from '../SingleMovie/SingleMovie';

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.MovieList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.MovieCard}>
          <Link to={`/movies/${id}`}>
            <SingleMovie poster_path={poster_path} title={title} />

            {/* <img
              className={styles.MovieImg}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://www.kino-teatr.ru/movie/posters/big/0/24200.jpg`
              }
              alt={title}
            />
            <h2 className={styles.MovieTitle}>{title}</h2> */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
