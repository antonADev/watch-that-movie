import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSelectedMovie } from '../../features/selectedMovie/selectedMovieSlice';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';

const RandomMovie = () => {
  const dispatch = useDispatch();
  const { credits, data, message, status } = useSelector(
    (state) => state.selectedMovieData
  );
  useEffect(() => {
    dispatch(fetchSelectedMovie());
  }, []);

  return (
    <>
      {status === 'loading' && <Spinner />}
      {status === 'idle' && (
        <>
          <MovieCard
            status={status}
            movie={data}
            message={message}
            credits={credits}
          />
        </>
      )}
    </>
  );
};

export default RandomMovie;
