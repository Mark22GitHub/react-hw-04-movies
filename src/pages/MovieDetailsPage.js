import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Cast from './Cast';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    poster_path: null,
    title: null,
    runtime: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(`/movie/${movieId}?api_key=${apiKey}`);
    console.log(response.data);

    this.setState({ ...response.data });
  }

  render() {
    const { movieId } = this.props.match.params;
    const {
      poster_path,
      title,
      runtime,
      vote_average,
      overview,
      genres: { name },
    } = this.state;
    return (
      <>
        <h1>'MovieDetailsPage' {movieId}</h1>

        <img src={poster_path} alt={title}></img>
        <h2>{title}</h2>
        <p>Runtime: {runtime} mins</p>
        <p>User's score: {vote_average}</p>
        <h3>Overview: {overview}</h3>
        <h4>Genres: {name}</h4>

        <Switch>
          <Route exact path="/movies/:movieId/cast" component={Cast} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
