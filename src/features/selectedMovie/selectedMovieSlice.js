import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovieDetails } from './selectedMovieApi';

const initialState = {
  data: [],
  status: '',
  message: '',
};

export const fetchSelectedMovie = createAsyncThunk(
  'selectedMovieData/fetchSelectedMovie',
  async (movieId, { rejectWithValue }) => {
    try {
      const end = [];
      const data = await fetchMovieDetails(movieId);

      const result = await Promise.all(data);
      result.forEach((result) => {
        end = [...result, data];
      });

      return end;
    } catch (error) {}
  }
);

const selectedMovieSlice = createSlice({
  name: 'selectedMovieData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectedMovie.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchSelectedMovie.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export default selectedMovieSlice.reducer;
