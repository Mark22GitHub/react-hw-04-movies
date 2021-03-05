import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Reviews.module.css';
import apiMovieDB from '../../api/the-movie-db-API';

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
    const { reviews } = this.state;
    console.log(reviews);
    return (
      <>
        <div>
          <h1 className={styles.title}>Reviews</h1>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id} className={styles.ReviewsItem}>
                <h3>Author: {author}</h3>
                <p>
                  <span>Review:</span> {content}
                </p>
              </li>
            ))}
          </ul>
        </div>

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
