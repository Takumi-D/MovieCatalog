import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchMovieDetails, clearMovieDetails } from '../redux/redusers/movies';
import { addFavorite, removeFavorite } from '../redux/redusers/favorites';
import { selectMovieDetails } from '../redux/selectors/selectors';
import { isFavorite } from '../redux/selectors/selectors';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectMovieDetails);
  const favorite = useAppSelector((state) => isFavorite(state, id || ''));

  useEffect(() => {
    if (id) dispatch(fetchMovieDetails(id));
    return () => {
      dispatch(clearMovieDetails());
    };
  }, [dispatch, id]);

  if (!movie) return <div className='text-center'>Загрузка...</div>;

  return (
    <div className='container'>
      <div className='details'>
        <img src={movie.Poster} alt={movie.Title} />
        <div className='details-content'>
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <strong>Жанр:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Описание:</strong> {movie.Plot}
          </p>
          <button
            className='favorite-btn'
            onClick={() =>
              favorite
                ? dispatch(removeFavorite(movie.imdbID))
                : dispatch(addFavorite(movie))
            }
          >
            {favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
