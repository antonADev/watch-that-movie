import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';

import {
  fetchMoreTvShows,
  fetchTvShows,
} from '../../features/tvShows/tvShowsSlice';
import MovieDetail from '../movieDetail/movieDetail.component';
import MovieList from '../movieList/movieList.component';

const TvShows = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchTvShows());
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchMoreTvShows(page));
    setPage((page) => page + 1);
  };

  const { tvShows, status, loadMoreStatus, message } = useSelector(
    (state) => state.tvShowsData
  );

  return (
    <Routes>
      <Route
        index
        element={
          <MovieList
            data={tvShows}
            status={status}
            loadMoreStatus={loadMoreStatus}
            message={message}
            title={'Tv Shows'}
            handler={handleLoadMore}
          />
        }
      />
      <Route path={':id'} element={<MovieDetail type={'tv'} />} />
    </Routes>
  );
};

export default TvShows;
