import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${apiKey}`,
    );
    console.log(response.data.cast);

    this.setState({ ...response.data });
  }

  render() {
    const { match } = this.props;
    const { movieId } = this.props.match.params;
    const { cast } = this.state;
    console.log(cast);
    return (
      <>
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : `https://mir-s3-cdn-cf.behance.net/projects/original/22124287.5490a316e6764.png`
                }
                alt={name}
                width="200"
              />
              <h4>Actor: {name}</h4>
              <h4>Character: {character}</h4>
            </li>
          ))}
        </ul>
        {/* <NavLink to={`${match}/${movieId}credits`}>
          <p>cast</p>
        </NavLink> */}
      </>
    );
  }
}

export default Cast;
