import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';
import apiMovieDB from '../../api/the-movie-db-API';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    poster_path: null,
    title: null,
    runtime: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;

  //   const response = await axios.get(`/movie/${movieId}?api_key=${apiKey}`);
  //   console.log(response.data);

  //   this.setState({ ...response.data });
  // }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const { movie } = this.state;

    apiMovieDB
      .fetchMovieDetails(movieId)
      // .then(data => console.log(data));
      .then(data => this.setState({ ...data }));
    // console.log(movie);
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
        <button className={styles.goBackBtn} type="button">
          ⇐ back
        </button>
        <div className={styles.detailsContainer}>
          <img
            className={styles.detailsImg}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w400/${poster_path}`
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
                to={`${match.url}/cast`}
              >
                cast
              </NavLink>
            </li>
            <li className={styles.NavLinkItem}>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.NavLink__Active}
                to={`${match.url}/reviews`}
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

// {
//   /* <div className={styles.detailsContainer}>

//           <img
//             className={styles.detailsImg}>
//             src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//             alt={title}
//           />
//           <h2 className={styles.detailsTitle}>{title}</h2>
//           <p className={styles.detailsText}>Runtime: {runtime} mins</p>
//           <p className={styles.detailsText}>User's score: {vote_average}</p>
//           <h3 className={styles.detailsOverview}>Overview: {overview}</h3>
//           <h4 className="">Genres:</h4>
//           <ul className={styles.detailsGenres}>
//             {genres.map(({ id, name }) => (
//               <li key={id}>{name}</li>
//             ))}
//           </ul>
//         </div> */
// }
