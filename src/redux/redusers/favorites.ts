import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieShort } from '../../types';
import { getFromStorage, saveToStorage } from '../../utils/localStorage';

interface FavoritesState {
  list: MovieShort[];
}

const initialState: FavoritesState = {
  list: getFromStorage<MovieShort[]>('favorites') || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<MovieShort>) => {
      if (!state.list.find((m) => m.imdbID === action.payload.imdbID)) {
        state.list.push(action.payload);
        saveToStorage('favorites', state.list);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((m) => m.imdbID !== action.payload);
      saveToStorage('favorites', state.list);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
