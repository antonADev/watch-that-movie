import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const initialState = {
  movieGenres: {},
  seriesGenres: {},
  status: '',
  message: '',
};

export const fetchGenreData = createAsyncThunk(
  'genreData/fetchGenreData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${navigator.language}`
        ),
        fetch(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=${navigator.language}`
        ),
      ]);
      const data = await Promise.all(response.map((r) => r.json()));
      return data;
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenreData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenreData.fulfilled, (state, action) => {
        console.log(action);
        state.status = 'idle';
        state.movieGenres = action.payload[0];
        state.seriesGenres = action.payload[1];
      })
      .addCase(fetchGenreData.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export default genreSlice.reducer;
