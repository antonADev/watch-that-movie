import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchInitialData } from '../../features/randomMovie/randomMovieSlice';

import MovieCard from '../../components/movie-card/movie-card.component';
import { fetchCredits } from '../../features/credits/creditSlice';

const RandomMovie = () => {
  const [fetched, setFetched] = useState(false);
  const dispatch = useDispatch();

  const { movieStatus, movie, movieMessage } = useSelector(
    (state) => state.randomMovieData
  );

  const { status, credits, message } = useSelector(
    (state) => state.creditsData
  );

  console.log(credits);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch movie and wait for actions to resolve
        await Promise.all([dispatch(fetchInitialData())]);

        // now fetch credits
        dispatch(fetchCredits());
      } catch (error) {
        // handle or ignore errors?
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <MovieCard
        status={movieStatus}
        movie={movie}
        message={movieMessage}
        credits={credits}
      />
    </>
  );
};

export default RandomMovie;
