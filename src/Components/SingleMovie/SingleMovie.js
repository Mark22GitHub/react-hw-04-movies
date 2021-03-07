import React from 'react';
import styles from '../MovieList/MovieList.module.css';
const SingleMovie = ({ poster_path, title }) => {
  return (
    <>
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
    </>
  );
};

export default SingleMovie;
