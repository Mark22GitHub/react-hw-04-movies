import React, { Component } from 'react';
import styles from './Cast.module.css';
import apiMovieDB from '../../api/the-movie-db-API';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    apiMovieDB
      .fetchMovieCredits(movieId)
      .then(data => this.setState({ cast: [...data.cast] }));
  }

  render() {
    const { cast } = this.state;
    console.log(cast);
    return (
      <>
        <div>
          <h1 className={styles.title}>Cast</h1>
          <ul className={styles.castList}>
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id} className={styles.castItem}>
                <img
                  className={styles.castImg}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : `https://teron.online/uploads/post-7-1163969421_thumb.jpg`
                  }
                  alt={name}
                />
                <h4>Actor: {name}</h4>
                <h4>Character: {character}</h4>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Cast;
