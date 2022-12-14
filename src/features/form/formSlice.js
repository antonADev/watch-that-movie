import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieOrTv: '',
  genre: '',
  providers: [],
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setMovieOrTv: (state, action) => {
      state.movieOrTv = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setProviders: (state, action) => {
      state.providers = action.payload;
    },
  },
});

export const { setMovieOrTv, setGenre, setProviders } = formSlice.actions;

export default formSlice.reducer;
