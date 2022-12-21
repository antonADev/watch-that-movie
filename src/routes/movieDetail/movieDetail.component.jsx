import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useMatch } from 'react-router-dom';
import { fetchSelectedMovie } from '../../features/selectedMovie/selectedMovieSlice';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';

const MovieDetail = ({ type }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(useLocation());

  useEffect(() => {
    dispatch(fetchSelectedMovie({ type: type, id: id }));
  }, [type, id]);

  const { data, message, status } = useSelector(
    (state) => state.selectedMovieData
  );

  return (
    <>
      {status === 'loading' && <Spinner />}
      {status === 'idle' && <MovieCard movie={data} />}
      {status === 'error' && <h1>{message}</h1>}
    </>
  );
};

export default MovieDetail;
