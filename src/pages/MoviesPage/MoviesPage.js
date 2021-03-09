import React, { Component } from 'react';
import apiMovieDB from '../../api/the-movie-db-API';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Loader from '../../Components/Loader/Loader';
import MovieList from '../../Components/MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      apiMovieDB.fetchMoviesBySearch(search).then(data =>
        this.setState({
          movies: [...data],
        }),
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  onChangeQuery = async request => {
    this.setState({ query: request, error: null });

    await this.props.history.push({
      pathname: this.props.location.pathname,
      search: `&query=${request}`,
    });
  };

  fetchMovies = () => {
    const { query } = this.state;

    this.setState({ isLoading: true });

    apiMovieDB
      .fetchMoviesBySearch(query)
      .then(data =>
        this.setState({
          movies: [...data],
        }),
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

        {isLoading && <Loader />}
        {error && <h1>Something went wrong...Try again!</h1>}
      </>
    );
  }
}

export default MoviesPage;
