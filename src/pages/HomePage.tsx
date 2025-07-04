import { useAppDispatch, useAppSelector } from '../hooks';
import React, { useState } from 'react';
import { fetchMovies } from '../redux/redusers/movies';
import {
  errorMovies,
  selectMovies,
  selectMoviesStatus,
} from '../redux/selectors/selectors';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const movies: any = useAppSelector(selectMovies);
  const status: any = useAppSelector(selectMoviesStatus);
  const error: any = useAppSelector(errorMovies);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) dispatch(fetchMovies(query));
  };

  const loading =
    status === 'loading' ? (
      <div className='text-center'>Загрузка...</div>
    ) : null;
  const errorMessage =
    status === 'failed' ? (
      <div className='text-center text-red-500'>{error}</div>
    ) : null;

  return (
    <div className='container'>
      <div className='search-bar'>
        <input
          type='text'
          className=''
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Название фильма'
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>
      {loading}
      {errorMessage}
      <div className='grid'>
        {movies?.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default HomePage;
