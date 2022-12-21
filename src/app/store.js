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
import welcomeSliceReducer from '../features/welcome/welcomeSlice';
import genreSliceReducer from '../features/genreSelector/genreSlice';
import selectedMovieSliceReducer from '../features/selectedMovie/selectedMovieSlice';
import preferredMovieSliceReducer from '../features/preferredMovie/preferredMovieSlice';
import tvShowsSliceReducer from '../features/tvShows/tvShowsSlice';
import moviesSliceReducer from '../features/movies/moviesSlice';
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

const moviePersistConfig = {
  key: 'selectedMovieData',
  storage,
  whitelist: ['data'],
};

const rootReducer = combineReducers({
  randomMovieData: randomMovieSliceReducer,
  welcome: welcomeSliceReducer,
  genreData: genreSliceReducer,
  selectedMovieData: persistReducer(
    moviePersistConfig,
    selectedMovieSliceReducer
  ),
  preferredMovieData: preferredMovieSliceReducer,
  tvShowsData: tvShowsSliceReducer,
  moviesData: moviesSliceReducer,
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
