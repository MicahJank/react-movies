import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="top">
    <Link to={'/'} className="home-button">Home</Link>
    <Link to={'/saved'} className="saved-list-movies">
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
      </div>
    </Link>
  
  </div>
);

export default SavedList;
