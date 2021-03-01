import React, { Component } from 'react';
import axios from 'axios';

// =====================================================================================
// API Key: f6569593c995527660cd005f6c6f1d95

// An example request looks like:

// `https://api.themoviedb.org/3/movie/550?api_key=f6569593c995527660cd005f6c6f1d95`

// =====================================================================================
// /trending/{media_type}/{time_window}
const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class HomePage extends Component {
  state = {
    trendingmMovies: [],
  };

  async componentDidMount() {
    const response = await axios.get(`/trending/movie/week?api_key=${apiKey}`);
    console.log(response.data.results);

    this.setState({ trendingmMovies: response.data.results });
  }

  render() {
    const { trendingmMovies } = this.state;
    return (
      <>
        <h1>
          'Home Page', домашняя страница со списком популярных кинофильмов
        </h1>

        <ul>
          {trendingmMovies.map(({ id, title }) => (
            <li key={id}> {title} </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

// import React from 'react';

// const HomePage = () => {
//   return (
//     <h1>'HomePage', домашняя страница со списком популярных кинофильмов</h1>
//   );
// };

// export default HomePage;
