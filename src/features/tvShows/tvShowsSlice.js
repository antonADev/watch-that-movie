import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMovieObject } from '../../utils/helperFunctions';
import { fetchInitialTvShowList, fetchMoreTvShowList } from './tvShowsApi';

const initialState = {
  tvShows: [],
  tvShowsStatus: '',
  loadMoreStatus: '',
  tvShowsMessage: '',
};

export const fetchTvShows = createAsyncThunk(
  'tvShowsData/fetchTvShows',
  async (_, { rejectWithValue, getState }) => {
    try {
      const data = await fetchInitialTvShowList();

      return data.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);
export const fetchMoreTvShows = createAsyncThunk(
  'tvShowsData/fetchMoreTvShows',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetchMoreTvShowList(page);

      return data.results.map((el) => createMovieObject(el));
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

const tvShowsSlice = createSlice({
  name: 'tvShowsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.tvShowsStatus = 'loading';
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.tvShowsStatus = 'idle';
        state.tvShows = action.payload;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.tvShowsStatus = 'error';
        state.tvShowsMessage = action.payload;
      })
      .addCase(fetchMoreTvShows.pending, (state) => {
        state.loadMoreStatus = 'loading';
      })
      .addCase(fetchMoreTvShows.fulfilled, (state, action) => {
        state.loadMoreStatus = 'idle';
        state.tvShows = [...state.tvShows, ...action.payload];
      })
      .addCase(fetchMoreTvShows.rejected, (state, action) => {
        console.log(action);
        state.loadMoreStatus = 'error';
        state.tvShowsMessage = action.payload;
      });
  },
});

export default tvShowsSlice.reducer;
