import { useState, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchMoreTvShows, fetchTvShows } from '../../features/tvShows/tvShowsSlice';

import MovieList from '../../components/movieList/movieList.component';

const MovieDetail = lazy(() => import('../movieDetail/movieDetail.component'));

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

  const { tvShows, tvShowsStatus, loadMoreStatus, tvShowsMessage } = useSelector(
    (state) => state.tvShowsData
  );

  return (
    <Routes>
      <Route
        index
        element={
          <MovieList
            data={tvShows}
            status={tvShowsStatus}
            loadMoreStatus={loadMoreStatus}
            message={tvShowsMessage}
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
