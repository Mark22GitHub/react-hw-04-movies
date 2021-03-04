import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

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
    const { match } = this.props;

    const {
      poster_path,
      title,
      runtime,
      vote_average,
      overview,
      genres,
    } = this.state;
    return (
      <>
        {/* <h1>'MovieDetailsPage' {movieId}</h1> */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>Runtime: {runtime} mins</p>
        <p>User's score: {vote_average}</p>
        <h3>Overview: {overview}</h3>
        <h4>Genres:</h4>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <ul className="">
          <li className="">
            <NavLink to={`${match.url}/cast`}>cast</NavLink>
          </li>
          <li className="">
            <NavLink to={`${match.url}/reviews`}>reviews</NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            exact
            path={`${match.path}/cast`}
            render={props => <Cast {...props} extraPropName={movieId} />}
          />

          <Route
            exact
            path={`${match.path}/reviews`}
            render={props => <Reviews {...props} extraPropName={movieId} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
