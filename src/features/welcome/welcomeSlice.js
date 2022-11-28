import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: true,
};

const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    setIsLoaded: (state) => {
      state.isLoaded = false;
    },
  },
});

export const { setIsLoaded } = welcomeSlice.actions;

export default welcomeSlice.reducer;
