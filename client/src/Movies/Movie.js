import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.js';

const Movie = (props) => {
  console.log(props);
  const [movie, setMovie] = useState(); 
 
  useEffect(() => {

    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.clickFunction;
    addToSavedList(movie)
  }

  if (!movie) {
    return (<div>Loading movie information...</div>);
  }

  const { title, director, metascore, stars } = movie;
  console.log('movie: ', movie);
  // console.log('title: ', movie.title);
  // console.log('director: ', director);
  // console.log('metascore: ', metascore);
  // console.log('stars: ', stars);
  
  return (
    <div className="save-wrapper">
      <MovieCard title={title} director={director} metascore={metascore} stars={stars} />
      <div onClick={ saveMovie } className="save-button">Save</div>
    </div>
  );
}

export default Movie;
