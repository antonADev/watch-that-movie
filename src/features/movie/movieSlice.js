import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovie } from './movieApi';

const initialState = {
  data: '',
  status: 'idle',
  message: '',
};

export const fetchMovieData = createAsyncThunk(
  'movieData/fetchMovieData',
  async (_, { getState }) => {
    const genre = getState().genreData.data.id;
    console.log(genre);
    const data = await fetchMovie(genre);
    console.log(data.total_pages);
    return data.total_pages;
  }
);

const movieSlice = createSlice({
  name: 'movieData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchMovieData.pending, (state) => {
      //   state.status = 'loading';
      // })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
    // .addCase(fetchMovieData.rejected, (state, action) => {
    //   state.status = 'error';
    //   state.message = action.payload;
    // });
  },
});

export default movieSlice.reducer;
