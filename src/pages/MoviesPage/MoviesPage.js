import React, { Component } from 'react';
import axios from 'axios';
import apiMovieDB from '../../api/the-movie-db-API';
// import { Link } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar';
// import styles from './MoviesPage.module.css';
import Loader from '../../Components/Loader/Loader';

import MovieList from '../../Components/MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  onChangeQuery = request => {
    this.setState({ query: request, movies: [], error: null });
  };

  fetchMovies = () => {
    const { query } = this.state;

    this.setState({ isLoading: true });

    apiMovieDB
      .fetchMoviesBySearch(query)
      .then(
        data =>
          this.setState({
            movies: [...data],
          }),
        // console.log(this.state.movies),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />

        <MovieList movies={movies} />

        {/* <ul className={styles.MovieList}>
          {movies.map(({ id, poster_path, title }) => (
            <li key={id} className={styles.MovieCard}>
              <Link to={`/movies/${id}`}>
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
        </ul> */}

        {isLoading && <Loader />}
        {error && <h1>Something went wrong...Try again!</h1>}
      </>
    );
  }
}

export default MoviesPage;
