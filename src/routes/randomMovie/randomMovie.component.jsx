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
  const [fetched, setFetched] = useState(false);
  const dispatch = useDispatch();

  // const { movieStatus, movie, movieMessage } = useSelector(
  //   (state) => state.randomMovieData
  // );

  // const { status, credits, message } = useSelector(
  //   (state) => state.creditsData
  // );

  const { credits, data, message, status } = useSelector(
    (state) => state.selectedMovieData
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // fetch movie and wait for actions to resolve
  //       await Promise.all([dispatch(fetchInitialData())]);

  //       // now fetch credits
  //       dispatch(fetchCredits());
  //     } catch (error) {
  //       // handle or ignore errors?
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

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
