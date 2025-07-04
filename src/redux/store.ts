import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './redusers/movies';
import favoritesReducer from './redusers/favorites';

const reducer = {
  movies: moviesReducer,
  favorites: favoritesReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
