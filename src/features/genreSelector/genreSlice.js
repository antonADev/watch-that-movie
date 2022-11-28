import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const initialState = {
  genres: {},
  type: '',
  status: '',
  message: '',
};

//MOVIE
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

// SERIES
// https://api.themoviedb.org/3/genre/tv/list?api_key=<<api_key>>&language=en-US

export const fetchGenreData = createAsyncThunk(
  'genreData/fetchGenreData',
  async (type, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=${navigator.language}`
      );
      const res = await data.json();

      return res;
    } catch (error) {
      rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data`
      );
    }
  }
);

const genreSlice = createSlice({
  name: 'genreData',
  initialState,
  reducers: {
    setGenreBasedOnShow: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenreData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenreData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.genres = action.payload;
      })
      .addCase(fetchGenreData.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export const { setGenreBasedOnShow } = genreSlice.actions;

export default genreSlice.reducer;
