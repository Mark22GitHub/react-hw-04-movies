import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styles from './Reviews.module.css';
import apiMovieDB from '../../api/the-movie-db-API';

// const apiKey = 'f6569593c995527660cd005f6c6f1d95';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class Reviews extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const { results } = this.state;

    apiMovieDB
      .fetchMovieReviews(movieId)
      .then(data => this.setState({ ...data }));
  }

  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;

  //   const response = await axios.get(
  //     `/movie/${movieId}/reviews?api_key=${apiKey}`,
  //   );
  //   console.log(response.data.results);

  //   this.setState({ ...response.data });
  // }

  render() {
    // const { match } = this.props;
    // const { movieId } = this.props.match.params;
    const { results } = this.state;
    console.log(results);
    return (
      <>
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id} className={styles.ReviewsItem}>
              <h3>Author: {author}</h3>
              <p>
                <span>Review:</span> {content}
              </p>
            </li>
          ))}
        </ul>
        {/* <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>Review: {review.content}</p>
            </li>
          ))}
        </ul> */}

        {/* <NavLink to={`${match}/${movieId}credits`}>
          <p>cast</p>
        </NavLink> */}
      </>
    );
  }
}

export default Reviews;
