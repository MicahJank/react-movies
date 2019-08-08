import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.js';

import { Link } from 'react-router-dom';

const MovieList = props => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          // console.log(response);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        // <MovieDetails key={movie.id} movie={movie} />
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
