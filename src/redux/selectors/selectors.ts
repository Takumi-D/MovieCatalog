import { createDraftSafeSelector } from '@reduxjs/toolkit';

const state = (state) => state;

const stateFavorites = createDraftSafeSelector(
  state,
  (state) => state.favorites,
);

const stateMovies = createDraftSafeSelector(state, (state) => state.movies);

const selectFavorites = createDraftSafeSelector(
  stateFavorites,
  (favorites) => favorites?.list,
);

const isFavorite = createDraftSafeSelector(
  selectFavorites,
  (_, id: string) => id,
  (favoritesList, id) => favoritesList.some((movie) => movie.imdbID === id),
);

const selectMovies = createDraftSafeSelector(
  stateMovies,
  (movies) => movies.list,
);

const selectMovieDetails = createDraftSafeSelector(
  stateMovies,
  (movies) => movies.selectedMovie,
);

const selectMoviesStatus = createDraftSafeSelector(
  stateMovies,
  (movies) => movies.status,
);

const errorMovies = createDraftSafeSelector(
  stateMovies,
  (movies) => movies.error,
);

export {
  selectFavorites,
  isFavorite,
  selectMovies,
  selectMovieDetails,
  selectMoviesStatus,
  errorMovies,
};
