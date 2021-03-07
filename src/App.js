import './App.css';

import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './Components/Header/Header';
import routes from './routes';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
};

export default App;

// =====================================================================================
// API Key: f6569593c995527660cd005f6c6f1d95

// An example request looks like:

// `https://api.themoviedb.org/3/movie/550?api_key=f6569593c995527660cd005f6c6f1d95`

// =====================================================================================
