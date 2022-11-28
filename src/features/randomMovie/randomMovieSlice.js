import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchGenre,
  fetchPages,
  fetchMovie,
  fetchFinalMovie,
} from './randomMovieApi';
import { randomize } from '../../utils/helperFunctions';
import { createMovieObject } from '../../utils/helperFunctions';

const initialState = {
  movie: {},
  movieStatus: '',
  movieMessage: '',
};

export const fetchInitialData = createAsyncThunk(
  'randomMovieData/fetchInitialData',
  async (_, { rejectWithValue }) => {
    try {
      //First fetch that gets the available genres
      const data = await fetchGenre();
      //A function that randomizes a number between 0 and the response length
      const randomGenre = randomize(data.genres.length);
      //Selecting the random genre
      const genre = data.genres[randomGenre].id;

      //Second fetch that gets the available movies with that genre
      const movie = await fetchPages(genre);
      //A function that randomizes a number between 0 and the response length of pages
      const randomPage = randomize(movie.total_pages);

      //Third fetch that gets all the 20 movies available on the selected page
      const movieList = await fetchMovie(genre, randomPage);
      //A function that randomizes a number between 0 and the response length
      const randomMovie = randomize(movieList.results.length);

      const finalMovie = await fetchFinalMovie(
        movieList.results[randomMovie].id
      );
      // console.log(createMovieObject(finalMovie));
      console.log(finalMovie);
      //Here finally the state is set to the randomly chosen film
      return createMovieObject(finalMovie);
    } catch (error) {
      return rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data`
      );
    }
  }
);

const randomMovieSlice = createSlice({
  name: 'randomMovieData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.movieStatus = 'loading';
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.movieStatus = 'idle';
        state.movie = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.movieStatus = 'error';
        state.movieMessage = action.payload;
      });
  },
});

export default randomMovieSlice.reducer;
