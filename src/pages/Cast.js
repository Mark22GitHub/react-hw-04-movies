import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class Cast extends Component {
  state = {};

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `/movie/${movieId}/cast?api_key=${apiKey}`,
    );
    console.log(response.data);

    this.setState({ ...response.data });
  }

  render() {
    const { match } = this.props;
    const { movieId } = this.props.match.params;
    return (
      <>
        <NavLink to={`${match}/${movieId}cast`}>
          <p>Cast</p>
        </NavLink>
      </>
    );
  }
}

export default Cast;
