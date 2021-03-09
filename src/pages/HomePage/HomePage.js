import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiMovieDB from '../../api/the-movie-db-API';
import styles from './HomePage.module.css';
import PropTypes from 'prop-types';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    apiMovieDB.fetchTrendingMovies().then(results =>
      this.setState({
        trendingMovies: results,
      }),
    );
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        <h1 className={styles.trendingMovie}>Trending Movies</h1>

        <ul className={styles.trendingMovieList}>
          {trendingMovies.map(({ id, title, poster_path, location }) => (
            <li className={styles.trendingMovieCard} key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
                // to={`/movies/${id}`}
              >
                <img
                  className={styles.trendingMovieImg}
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <h2 className={styles.trendingMovieTitle}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

HomePage.propTypes = {
  id: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};

export default HomePage;
