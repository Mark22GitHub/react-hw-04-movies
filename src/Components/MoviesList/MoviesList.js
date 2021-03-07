import React from 'react';
import styles from './MoviesList.module.css';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, match }) => {
  return (
    <ul className={styles.MovieList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.MovieCard}>
          <Link to={`${match.url}/${id}`}>
            <img
              className={styles.MovieImg}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://www.kino-teatr.ru/movie/posters/big/0/24200.jpg`
              }
              alt={title}
            />
            <h2 className={styles.MovieTitle}>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
