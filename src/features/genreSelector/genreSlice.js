import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovieGenres, fetchTvSeriesGenres } from './genreApi';

const initialState = {
  movieGenres: {},
  seriesGenres: {},
  status: '',
  moviesMessage: '',
  seriesMessage: '',
};

export const fetchGenreData = createAsyncThunk(
  'genreData/fetchGenreData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Promise.all([fetchMovieGenres(), fetchTvSeriesGenres()]);
      console.log(response);
      return response;
    } catch (error) {
      rejectWithValue(`An error occurred. ${error}`);
    }
  }
);

const genreSlice = createSlice({
  name: 'genreData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenreData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenreData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movieGenres = action.payload[0];
        state.seriesGenres = action.payload[1];
      })
      .addCase(fetchGenreData.rejected, (state, action) => {
        state.status = 'error';
        state.moviesMessage = action.payload[0];
        state.seriesMessage = action.payload[1];
      });
  },
});

export default genreSlice.reducer;
