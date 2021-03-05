import React, { Component } from 'react';
import axios from 'axios';
import apiMovieDB from '../../api/the-movie-db-API';
import { Link } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    // isLoading: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
    apiMovieDB.fetchMoviesBySearch().then(results =>
      this.setState({
        movies: results,
      }),
    );
  }

  //   async componentDidMount() {
  //     const response = await axios.get(`/trending/movie/week?api_key=${apiKey}`);
  //     console.log(response.data.results);

  //     this.setState({ movies: response.data.results });
  //   }

  render() {
    console.log(this.props.match.url);
    const { movies } = this.state;
    const { match } = this.props;
    console.log(movies);
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        {/* 
        <h1 className="">
          'Movies Page', страница поиска фильмов по ключевому слову
        </h1>
        <ul className="">
          {movies.map(({ id, title }) => (
            <li className="" key={id}>
              <Link to={`${match.url}/${id}`}>
            
                <h2 className="">{title}</h2>
              </Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MoviesPage;
