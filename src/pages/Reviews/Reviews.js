import React, { Component } from 'react';
import styles from './Reviews.module.css';
import apiMovieDB from '../../api/the-movie-db-API';
import PropTypes from 'prop-types';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiMovieDB
      .fetchMovieReviews(movieId)
      .then(data => this.setState({ reviews: [...data.results] }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <div>
          <h1 className={styles.title}>Reviews</h1>
          <ul>
            {reviews.length > 0 ? (
              reviews.map(({ id, author, content }) => (
                <li key={id} className={styles.ReviewsItem}>
                  <h3>Author: {author}</h3>
                  <p>
                    <span>Review:</span> {content}
                  </p>
                </li>
              ))
            ) : (
              <h3>We dont have any reviews for this movie</h3>
            )}
          </ul>
        </div>
      </>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;
