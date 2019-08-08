import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard.js';

const SavedMovies = ( props ) => {
    console.log(props);
    return (
        <div className="movie-list">
            {props.savedList.map(movie => {
            return <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
                   </Link>
                })
            }
        </div>
    );
};


export default SavedMovies;