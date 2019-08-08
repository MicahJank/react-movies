import React, { useState } from 'react';

import { Route } from 'react-router-dom';

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
      <SavedList list={savedList} />
      <Route exact path='/' component={ MovieList } />
      <Route path='/movies/:id' render={ props => <Movie { ...props } clickFunction={ addToSavedList } />} />
      <Route path='/saved' render={ props => <SavedMovies { ...props } savedList={ savedList } /> }/>
    </div>
  );
};

export default App;
