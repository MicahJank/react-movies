import React, { useState } from 'react';

import { Route, NavLink } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';
import SavedMovies from './Movies/SavedMovies.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <div className='nav-links'>
      <NavLink exact to={'/'} className="home-button">Home</NavLink>
      <h1 className='movie-finder'>Movie Finder</h1>
      </div>
      <SavedList list={savedList} />
      <Route exact path='/' component={ MovieList } />
      <Route path='/movies/:id' render={ props => <Movie { ...props } clickFunction={ addToSavedList } />} />
      <Route path='/saved' render={ props => <SavedMovies { ...props } savedList={ savedList } /> }/>
    </div>
  );
};

export default App;
