import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <Link to={'/saved'}>
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to={'/'} className="home-button">Home</Link>
    </div>
  </Link>
);

export default SavedList;
