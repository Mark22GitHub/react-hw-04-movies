import axios from 'axios';

const apiKey = 'f6569593c995527660cd005f6c6f1d95';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

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
    return axios
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
