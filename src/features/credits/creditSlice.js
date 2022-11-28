import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCreditsApi } from './creditsApi';

const initialState = {
  credits: {},
  status: '',
  message: '',
};

export const fetchCredits = createAsyncThunk(
  'creditsData/fetchCredits',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { id } = getState().randomMovieData.movie;
      const data = fetchCreditsApi(id);
      return data;
    } catch (error) {
      return rejectWithValue(
        `An error occurred. It wasn't possibile to retrieve the requested data`
      );
    }
  }
);

const creditsSlice = createSlice({
  name: 'creditsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCredits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCredits.fulfilled, (state, action) => {
        state.status = 'idle';
        state.credits = action.payload;
      })
      .addCase(fetchCredits.rejected, (state, action) => {
        state.status = 'error';
        state.message = action.payload;
      });
  },
});

export default creditsSlice.reducer;
