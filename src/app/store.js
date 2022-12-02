// import { configureStore } from '@reduxjs/toolkit';
// import randomMovieSliceReducer from '../features/genre/randomMovieSlice';
// import movieSliceReducer from '../features/movie/movieSlice';
// import welcomeSliceReducer from '../features/welcome/welcomeSlice';
// export const store = configureStore({
//   reducer: {
//     randomMovieData: randomMovieSliceReducer,
//     movieData: movieSliceReducer,
//     welcome: welcomeSliceReducer,
//   },
// });

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import randomMovieSliceReducer from '../features/randomMovie/randomMovieSlice';
import movieSliceReducer from '../features/movie/movieSlice';
import welcomeSliceReducer from '../features/welcome/welcomeSlice';
import formSliceReducer from '../features/form/formSlice';
import genreSliceReducer from '../features/genreSelector/genreSlice';
import creditsSliceReducer from '../features/credits/creditSlice';
import selectedMovieSliceReducer from '../features/selectedMovie/selectedMovieSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['welcome'],
};

const rootReducer = combineReducers({
  randomMovieData: randomMovieSliceReducer,
  movieData: movieSliceReducer,
  welcome: welcomeSliceReducer,
  formData: formSliceReducer,
  genreData: genreSliceReducer,
  creditsData: creditsSliceReducer,
  selectedMovieData: selectedMovieSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
