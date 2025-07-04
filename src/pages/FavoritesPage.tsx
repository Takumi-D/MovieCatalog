import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { selectFavorites } from '../redux/selectors/selectors';
import { removeFavorite } from '../redux/redusers/favorites';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2 className='page-title'>Избранные фильмы</h2>
      {favorites.length === 0 ? (
        <p className='text-center'>Список избранного пуст.</p>
      ) : (
        <div className='grid'>
          {favorites.map((movie) => (
            <div key={movie.imdbID} className='card'>
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </Link>
              <button
                className='favorite-btn'
                onClick={() => dispatch(removeFavorite(movie.imdbID))}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
