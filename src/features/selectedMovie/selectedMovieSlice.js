import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMovieObject } from '../../utils/helperFunctions';
import { fetchMovieDetails } from './selectedMovieApi';

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
      const { type, id } = myData;

      const data = await fetchMovieDetails(type, id);
      return createMovieObject(data);
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
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
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchSelectedMovie.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});
export const { setId, setType } = selectedMovieSlice.actions;

export default selectedMovieSlice.reducer;
