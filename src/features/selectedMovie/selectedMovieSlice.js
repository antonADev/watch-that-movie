import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMovieObject } from '../../utils/helperFunctions';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const initialState = {
  id: 0,
  type: '',
  data: {},
  credits: {},
  status: '',
  message: '',
};

export const fetchSelectedMovie = createAsyncThunk(
  'selectedMovieData/fetchSelectedMovie',
  async (myData, { rejectWithValue }) => {
    try {
      // let end = [];
      // const data = await fetchMovieDetails(movieId);
      // console.log(data);
      // const result = await Promise.all(data);
      // result.forEach((result) => {
      //   end = [...result, data.json()];
      // });
      // console.log(result);
      // return end;
      const { type, movieId } = myData;
      const data = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&language=${navigator.language}`
      );

      const res = await data.json();
      console.log(res);
      return createMovieObject(res);
    } catch (error) {}
  }
);
export const fetchMovieCredits = createAsyncThunk(
  'selectedMovieData/fetchMovieCredits',
  async (myData, { rejectWithValue, getState }) => {
    try {
      const { type, movieId } = myData;
      const data = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${API_KEY}&language=${navigator.language}`
      );

      const res = await data.json();
      console.log(res);
      return res;
    } catch (error) {}
  }
);

const selectedMovieSlice = createSlice({
  name: 'selectedMovieData',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectedMovie.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchSelectedMovie.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      })
      .addCase(fetchMovieCredits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'idle';
        state.credits = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});
export const { setId, setType } = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;
