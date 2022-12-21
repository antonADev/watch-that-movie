import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMovieObject } from '../../utils/helperFunctions';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const initialState = {
  movies: {},
  status: '',
  loadMoreStatus: '',
  message: '',
};

export const fetchMovies = createAsyncThunk(
  'tvShowsData/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${navigator.language}&page=1`
      );
      const res = await data.json();

      return res.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchMoreMovies = createAsyncThunk(
  'tvShowsData/fetchMoreMovies',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${navigator.language}&page=${page}`
      );
      const res = await data.json();

      return res.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(error.message);
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
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
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
        state.message = action.payload;
      });
    // .addCase(fetchMovieCredits.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchMovieCredits.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.status = 'idle';
    //   state.credits = action.payload;
    // })
    // .addCase(fetchMovieCredits.rejected, (state, action) => {
    //   state.status = 'error';
    //   state.message = action.payload;
    // });
  },
});

export default moviesSlice.reducer;
