import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  preferredMovie: {},
  preferredMovieStatus: '',
  preferredMovieMessage: '',
};

export const fetchPreferredMovie = createAsyncThunk(
  'preferredMovieData/fetchPreferredMovie',
  async (_, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data - ${error.message}`
      );
    }
  }
);
