import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiMovieDB from '../../api/the-movie-db-API';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    apiMovieDB.fetchTrendingMovies().then(results =>
      this.setState({
        trendingMovies: results,
      }),
    );
  }

  render() {
    console.log(this.props.match.url);
    const { trendingMovies } = this.state;

    return (
      <>
        <h1 className={styles.trendingMovie}>Trending Movies</h1>

        <ul className={styles.trendingMovieList}>
          {trendingMovies.map(({ id, title, poster_path }) => (
            <li className={styles.trendingMovieCard} key={id}>
              <Link to={`/movies/${id}`}>
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

export default HomePage;
