import './App.css';

import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink__Active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink__Active"
          >
            Movies Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies/:movieId"
            className="NavLink"
            activeClassName="NavLink__Active"
          >
            Movie Details Page
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
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
