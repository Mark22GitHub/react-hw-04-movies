import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';
import apiMovieDB from '../../api/the-movie-db-API';
import routes from '../../routes';
import PropTypes from 'prop-types';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    runtime: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    apiMovieDB
      .fetchMovieDetails(movieId)
      .then(data => this.setState({ ...data }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieId } = this.props.match.params;
    const { match } = this.props;
    const location = this.props.history.location.state?.from;

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
        <button
          className={styles.goBackBtn}
          onClick={this.handleGoBack}
          type="button"
        >
          ⇐ back
        </button>
        <div className={styles.detailsContainer}>
          <img
            className={styles.detailsImg}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w400${poster_path}`
                : `https://www.kino-teatr.ru/movie/posters/big/0/24200.jpg`
            }
            alt={title}
          />

          <div className={styles.detailsContainerInfo}>
            <h2 className={styles.detailsTitle}>{title}</h2>
            <p>Runtime: {runtime} mins</p>
            <p>User's score: {vote_average}</p>
            <h3 className={styles.detailsOverview}>
              <span>Overview:</span> {overview}
            </h3>
            <h4 className="">Genres:</h4>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className={styles.AddInfo}>Additional information:</h3>
          <ul className="">
            <li className={styles.NavLinkItem}>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.NavLink__Active}
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location },
                }}
              >
                cast
              </NavLink>
            </li>
            <li className={styles.NavLinkItem}>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.NavLink__Active}
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: location },
                }}
              >
                reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route
            exact
            path={`${match.path}/cast`}
            render={props => <Cast {...props} movieId={movieId} />}
          />

          <Route
            exact
            path={`${match.path}/reviews`}
            render={props => <Reviews {...props} movieId={movieId} />}
          />
        </Switch>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  runtime: PropTypes.number,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  movieId: PropTypes.number,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieDetailsPage);
