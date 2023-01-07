import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import {
  fetchMovies,
  fetchMoreMovies,
} from '../../features/movies/moviesSlice';

import MovieDetail from '../movieDetail/movieDetail.component';
import MovieList from '../movieList/movieList.component';

const Movies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchMoreMovies(page));
    setPage((page) => page + 1);
  };

  const { movies, movieStatus, loadMoreStatus, movieMessage } = useSelector(
    (state) => state.moviesData
  );

  return (
    <Routes>
      <Route
        index
        element={
          <MovieList
            data={movies}
            status={movieStatus}
            loadMoreStatus={loadMoreStatus}
            message={movieMessage}
            title={'Movies'}
            handler={handleLoadMore}
          />
        }
      />
      <Route path={':id'} element={<MovieDetail type={'movie'} />} />
    </Routes>
  );
};

export default Movies;
