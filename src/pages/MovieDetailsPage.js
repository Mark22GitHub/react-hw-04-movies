import React, { Component } from 'react';
import axios from 'axios';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(`/movie/${movieId}?api_key=${apiKey}`);
    console.log(response.data);

    this.setState({ movie: response.data });
  }

  render() {
    const { movieId } = this.props.match.params;
    return (
      <>
        <h1>
          'MovieDetailsPage', страница с детальной информацией о кинофильме.
          {movieId}
        </h1>
      </>
    );
  }
}

export default MovieDetailsPage;
