import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';

import { getLang } from '../../utils/helperFunctions';

import HomeHero from '../../components/home-hero/home-hero.component';
import CategoryCarousel from '../../components/category-carousel/category-carousel.component';
import Theme from '../../Theme';

import { HomeWrapper, MovieCarousel, CarouselWrapper } from './home.styles';
import { fetchGenreData } from '../../features/genreSelector/genreSlice';
import Spinner from '../../components/spinner/spinner.component';
import { createMovieObject } from '../../utils/helperFunctions';
import { fetchTvShows } from '../../features/tvShows/tvShowsSlice';
import MovieList from '../movieList/movieList.component';
import { fetchMovies } from '../../features/movies/moviesSlice';
import TvShows from '../tvShows/tvShows.component';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const lang = getLang();
const Home = () => {
  // const [movieData, setMovieData] = useState([]);
  // const [seriesData, setSeriesData] = useState([]);
  const dispatch = useDispatch();
  const { movieGenres, seriesGenres, status } = useSelector(
    (state) => state.genreData
  );

  const { movies, movieStatus, movieMessage } = useSelector(
    (state) => state.moviesData
  );
  const { tvShows, tvShowsStatus, tvShowsMessage } = useSelector(
    (state) => state.tvShowsData
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await Promise.all([
  //         fetch(
  //           `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${lang}&page=1`
  //         ),
  //         fetch(
  //           `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${lang}&page=1`
  //         ),
  //       ]);
  //       const data = await Promise.all(response.map((r) => r.json()));

  //       setMovieData(data[0].results.map((el) => createMovieObject(el)));
  //       setSeriesData(data[1].results.map((el) => createMovieObject(el)));
  //       dispatch(fetchGenreData());
  //     } catch (error) {}
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchGenreData());
    dispatch(fetchTvShows());
    dispatch(fetchMovies());
  }, []);

  // console.log(movieData);

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
              {movieStatus === 'error' && <h1>{movieMessage}</h1>}
              {tvShowsStatus === 'loading' && <Spinner />}
              {tvShowsStatus === 'idle' && (
                <CategoryCarousel
                  title={'Trending Series'}
                  category={tvShows}
                  genresArr={seriesGenres.genres}
                  type='tv'
                />
              )}
              {tvShowsStatus === 'error' && <h1>{tvShowsMessage}</h1>}
            </>
          )}
        </CarouselWrapper>
      </HomeHero>
    </Theme>
  );
};

export default Home;
