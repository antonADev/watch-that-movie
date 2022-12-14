import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchInitialData } from '../../features/randomMovie/randomMovieSlice';
import { fetchCredits } from '../../features/credits/creditSlice';

import {
  fetchSelectedMovie,
  fetchMovieCredits,
} from '../../features/selectedMovie/selectedMovieSlice';

import MovieCard from '../../components/movie-card/movie-card.component';

const RandomMovie = () => {
  const { credits, data, message, status } = useSelector(
    (state) => state.selectedMovieData
  );

  return (
    <>
      <MovieCard
        status={status}
        movie={data}
        message={message}
        credits={credits}
      />
    </>
  );
};

export default RandomMovie;
