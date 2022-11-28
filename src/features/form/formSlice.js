import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieOrTv: '',
  genre: '',
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
  },
});

export const { setMovieOrTv, setGenre } = formSlice.actions;

export default formSlice.reducer;
