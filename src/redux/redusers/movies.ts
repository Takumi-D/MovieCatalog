import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import Services from '../../services/imdex';

import { MovieShort, MovieDetails } from '../../types';

const services = new Services();

interface MoviesState {
  list: MovieShort[];
  selectedMovie: MovieDetails | null;
  status: 'idle' | 'loading' | 'failed';
  error: any;
}

const initialState: MoviesState = {
  list: [],
  selectedMovie: null,
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (title: string) => {
    const response = await services.searchMovies(title);
    if (response.Response === 'False') {
      throw new Error(response.Error);
    }
    return response || [];
  },
);

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (id: string) => {
    const movie = await services.getMovieDetails(id);
    if (movie.Response === 'False') {
      throw new Error(movie.Error);
    }
    return movie;
  },
);

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovieDetails: (state) => {
      state.selectedMovie = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload.Search;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
      });
  },
});

export const { clearMovieDetails } = movies.actions;
export default movies.reducer;
