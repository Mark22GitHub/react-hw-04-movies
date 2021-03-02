// const fetchPictures = ({ query = '', page = 1 }) => {
//   return axios
//     .get(
//       `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(({ data }) => data.hits);
// };

import axios from 'axios';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const fetchTrendingMovies = () => {
//   return (
//     axios
//       .get(`/trending/movie/week?api_key=${apiKey}`)
//       .then(({ data }) => data.results)
//       // .then(response => response.data.results);
//       .catch(error => console.log(error))
//   );
// };

const fetchTrendingMovies = async () => {
  try {
    return await axios
      .get(`/trending/movie/week?api_key=${apiKey}`)
      .then(({ data }) => data.results);
  } catch (error) {
    console.log(error);
  }
};

// export const fetchMovieId = async movie_id => {
//   try {
//     await axios
//       .get(`/movie/${movie_id}?api_key=${apiKey}`)
//       .then(response => response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default { fetchTrendingMovies };

// =====================================================================================
// API Key: f6569593c995527660cd005f6c6f1d95

// An example request looks like:

// `https://api.themoviedb.org/3/movie/550?api_key=f6569593c995527660cd005f6c6f1d95`

// =====================================================================================
