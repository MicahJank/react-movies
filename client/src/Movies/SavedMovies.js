import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MovieCard from './MovieCard.js';

const SavedMovies = ( props ) => {
    console.log(props);
    return (
        <div className="movie-list">
            {props.savedList.map(movie => {
            return <NavLink key={movie.id} to={`/movies/${movie.id}`}>
                    <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
                   </NavLink>
                })
            }
        </div>
    );
};


export default SavedMovies;