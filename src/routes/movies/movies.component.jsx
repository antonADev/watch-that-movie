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

// const TvShows = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     dispatch(fetchTvShows(page));
//   }, [page]);

//   const { tvShows, status, message } = useSelector(
//     (state) => state.tvShowsData
//   );

//   return (
//     <Routes>
//       <Route
//         index
//         element={<MovieList data={tvShows} status={status} message={message} />}
//       />
//       <Route path={':id'} element={<MovieDetail type={'tv'} />} />
//     </Routes>
//   );
// };

// export default TvShows;

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

  const { movies, status, loadMoreStatus, message } = useSelector(
    (state) => state.moviesData
  );

  return (
    <Routes>
      <Route
        index
        element={
          <MovieList
            data={movies}
            status={status}
            loadMoreStatus={loadMoreStatus}
            message={message}
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
