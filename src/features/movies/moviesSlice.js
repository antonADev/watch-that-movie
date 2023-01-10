import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMovieObject } from '../../utils/helperFunctions';
import { fetchInitialMovieList, fetchMoreMovieList } from './moviesApi';
const initialState = {
  movies: {},
  movieStatus: '',
  loadMoreStatus: '',
  movieMessage: '',
};

export const fetchMovies = createAsyncThunk(
  'moviesData/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchInitialMovieList();

      return data.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);
export const fetchMoreMovies = createAsyncThunk(
  'moviesData/fetchMoreMovies',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetchMoreMovieList(page);

      return data.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const moviesSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.movieStatus = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movieStatus = 'idle';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movieStatus = 'error';
        state.movieMessage = action.payload;
      })
      .addCase(fetchMoreMovies.pending, (state) => {
        state.loadMoreStatus = 'loading';
      })
      .addCase(fetchMoreMovies.fulfilled, (state, action) => {
        state.loadMoreStatus = 'idle';
        state.movies = [...state.movies, ...action.payload];
      })
      .addCase(fetchMoreMovies.rejected, (state, action) => {
        state.loadMoreStatus = 'error';
        state.movieMessage = action.payload;
      });
  },
});

export default moviesSlice.reducer;
