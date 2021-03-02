import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import apiMovieDB from '../api/the-movie-db-API';

// =====================================================================================
// API Key: f6569593c995527660cd005f6c6f1d95

// An example request looks like:

// `https://api.themoviedb.org/3/movie/550?api_key=f6569593c995527660cd005f6c6f1d95`

// =====================================================================================
// /trending/{media_type}/{time_window}
const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

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

  // async componentDidMount() {
  //   const response = await axios.get(`/trending/movie/week?api_key=${apiKey}`);
  //   console.log(response.data.results);

  //   this.setState({ trendingMovies: response.data.results });
  // }

  render() {
    console.log(this.props.match.url);
    const { trendingMovies } = this.state;
    // const { match } = this.props;

    return (
      <>
        <h1 className="">Trending Movies</h1>

        <ul className="">
          {trendingMovies.map(({ id, title }) => (
            <li className="" key={id}>
              <Link to={`/movies/${id}`}>
                {/* {this.props.match.url} */}
                <h2 className="">{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
