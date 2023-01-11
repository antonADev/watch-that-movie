import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { fetchSelectedMovie } from '../../features/selectedMovie/selectedMovieSlice';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';
import Error from '../../components/error/error.component';

import { MovieDetailWrapper } from './movieDetail.styles';
const MovieDetail = ({ type }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSelectedMovie({ type: type, id: id }));
  }, [type, id]);

  const { data, message, status } = useSelector((state) => state.selectedMovieData);

  return (
    <MovieDetailWrapper>
      {status === 'loading' && <Spinner />}
      {status === 'idle' && <MovieCard movie={data} />}
      {status === 'error' && <Error message={message} />}
    </MovieDetailWrapper>
  );
};

export default MovieDetail;
