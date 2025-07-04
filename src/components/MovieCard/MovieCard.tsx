import React from 'react';
import { Link } from 'react-router-dom';
import { MovieShort } from '../../types';

const MovieCard = ({ movie }: { movie: MovieShort }) => {
  return (
    <div className='card'>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
