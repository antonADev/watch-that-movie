import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMovieObject } from '../../utils/helperFunctions';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const initialState = {
  tvShows: [],
  tvShowsStatus: '',
  loadMoreStatus: '',
  tvShowsMessage: '',
};

export const fetchTvShows = createAsyncThunk(
  'tvShowsData/fetchTvShows',
  async (_, { rejectWithValue, getState }) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${navigator.language}&page=1`
      );
      const res = await data.json();

      return res.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchMoreTvShows = createAsyncThunk(
  'tvShowsData/fetchMoreTvShows',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${navigator.language}&page=${page}`
      );
      const res = await data.json();

      return res.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tvShowsSlice = createSlice({
  name: 'tvShowsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.tvShowsStatus = 'loading';
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.tvShowsStatus = 'idle';
        state.tvShows = action.payload;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.tvShowsStatus = 'error';
        state.tvShowsMessage = action.payload;
      })
      .addCase(fetchMoreTvShows.pending, (state) => {
        state.loadMoreStatus = 'loading';
      })
      .addCase(fetchMoreTvShows.fulfilled, (state, action) => {
        state.loadMoreStatus = 'idle';
        state.tvShows = [...state.tvShows, ...action.payload];
      })
      .addCase(fetchMoreTvShows.rejected, (state, action) => {
        console.log(action);
        state.loadMoreStatus = 'error';
        state.tvShowsMessage = action.payload;
      });
  },
});

export default tvShowsSlice.reducer;
