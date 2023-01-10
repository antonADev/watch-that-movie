import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeHero from '../../components/home-hero/home-hero.component';
import CategoryCarousel from '../../components/category-carousel/category-carousel.component';
import Spinner from '../../components/spinner/spinner.component';

import Theme from '../../Theme';

import { fetchGenreData } from '../../features/genreSelector/genreSlice';
import { fetchTvShows } from '../../features/tvShows/tvShowsSlice';
import { fetchMovies } from '../../features/movies/moviesSlice';

import { CarouselWrapper } from './home.styles';
import Error from '../../components/error/error.component';

const Home = () => {
  const dispatch = useDispatch();
  const { movieGenres, seriesGenres, status, message } = useSelector((state) => state.genreData);

  const { movies, movieStatus, movieMessage } = useSelector((state) => state.moviesData);
  const { tvShows, tvShowsStatus, tvShowsMessage } = useSelector((state) => state.tvShowsData);

  useEffect(() => {
    dispatch(fetchGenreData());
    dispatch(fetchTvShows());
    dispatch(fetchMovies());
  }, []);

  return (
    <Theme>
      <HomeHero
        title={`Don't stress out about what to watch.`}
        // title={'Every movie you could think of, in one place.'}
        subtitle={`You know those nights when you waste hours looking for the right
              movie to watch or the TV series to start? WTM solves the problem.`}>
        <CarouselWrapper>
          {status === 'loading' && <Spinner />}
          {status === 'idle' && (
            <>
              {movieStatus === 'loading' && <Spinner />}
              {movieStatus === 'idle' && (
                <CategoryCarousel
                  title={'Trending Movies'}
                  category={movies}
                  genresArr={movieGenres.genres}
                  type='movie'
                />
              )}
              {movieStatus === 'error' && <Error message={movieMessage} />}
              {tvShowsStatus === 'loading' && <Spinner />}
              {tvShowsStatus === 'idle' && (
                <CategoryCarousel
                  title={'Trending Series'}
                  category={tvShows}
                  genresArr={seriesGenres.genres}
                  type='tv'
                />
              )}
              {tvShowsStatus === 'error' && <Error message={tvShowsMessage} />}
            </>
          )}
          {status === 'error' && <Error message={message} />}
        </CarouselWrapper>
      </HomeHero>
    </Theme>
  );
};

export default Home;
