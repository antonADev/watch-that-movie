import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { randomize } from '../../utils/helperFunctions';

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

      const data = await fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=b4075be843e96cdf1d04055e2fee6ec7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${
          genre.id
        }&with_watch_providers=${providers.map((provider, index) => {
          return `${index ? '|' : ''}${provider.id}`;
        })}&watch_region=IT&with_watch_monetization_types=flatrate`
      );

      const res = await data.json();

      const secondData = await fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=b4075be843e96cdf1d04055e2fee6ec7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomize(
          res.total_pages
        )}&with_genres=${genre.id}&with_watch_providers=${providers.map(
          (provider, index) => {
            return `${index ? '|' : ''}${provider.id}`;
          }
        )}&watch_region=IT&with_watch_monetization_types=flatrate`
      );

      const resSecondData = await secondData.json();
      console.log(resSecondData.results[randomize(20)].id);
      return resSecondData.results[randomize(20)].id;
    } catch (error) {}
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
