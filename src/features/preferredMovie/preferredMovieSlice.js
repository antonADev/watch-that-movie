import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { randomize } from '../../utils/helperFunctions';
import { fetchMovieList, fetchRandomMovieFromList } from './preferredMovieApi';

const initialState = {
  data: '',
  status: '',
  message: '',
};

export const fetchPreferredMovie = createAsyncThunk(
  'preferredMovieData/fetchPreferredMovie',
  async (preferredData, { rejectWithValue }) => {
    try {
      const { type, genre, providers } = preferredData;

      const res = await fetchMovieList(type, genre, providers);
      const resSecondData = await fetchRandomMovieFromList(type, genre, providers, res);
      return resSecondData.results[randomize(resSecondData.results.length)].id;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const preferredMovieSlice = createSlice({
  name: 'preferredMovieData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPreferredMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPreferredMovie.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchPreferredMovie.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export default preferredMovieSlice.reducer;
