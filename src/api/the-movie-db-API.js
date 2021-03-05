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

// Trending/ fetchTrendingMovies
const fetchTrendingMovies = async () => {
  try {
    return await axios
      .get(`/trending/movie/week?api_key=${apiKey}`)
      .then(({ data }) => data.results);
  } catch (error) {
    console.log(error);
  }
};

// Movies/ fetchMoviesBySearch
const fetchMoviesBySearch = async query => {
  try {
    return await axios
      .get(`/search/movie?api_key=${apiKey}&query=${query}`)
      .then(({ data }) => data.results);
  } catch (error) {
    console.log(error);
  }
};

// MovieDetails / fetchMovieDetails
const fetchMovieDetails = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}?api_key=${apiKey}`)
      .then(({ data }) => data);
  } catch (error) {
    console.log(error);
  }
};

// Cast / fetchMovieCredits
const fetchMovieCredits = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/credits?api_key=${apiKey}`)
      .then(({ data }) => data);
  } catch (error) {
    console.log(error);
  }
};

// Reviews /fetchMovieReviews
const fetchMovieReviews = async movieId => {
  try {
    return await axios
      .get(`/movie/${movieId}/reviews?api_key=${apiKey}`)
      .then(({ data }) => data);
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchTrendingMovies,
  fetchMoviesBySearch,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

// =====================================================================================
// API Key: f6569593c995527660cd005f6c6f1d95

// An example request looks like:

// `https://api.themoviedb.org/3/movie/550?api_key=f6569593c995527660cd005f6c6f1d95`

// =====================================================================================
