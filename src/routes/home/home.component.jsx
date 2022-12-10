import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLang } from '../../utils/helperFunctions';

import HomeHero from '../../components/home-hero/home-hero.component';
import CategoryCarousel from '../../components/category-carousel/category-carousel.component';
import Theme from '../../Theme';

import { HomeWrapper, MovieCarousel, CarouselWrapper } from './home.styles';
import { fetchGenreData } from '../../features/genreSelector/genreSlice';
import Spinner from '../../components/spinner/spinner.component';
import { createMovieObject } from '../../utils/helperFunctions';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const lang = getLang();
const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const dispatch = useDispatch();

  const { movieGenres, seriesGenres, status } = useSelector(
    (state) => state.genreData
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${lang}&page=1`
          ),
          fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${lang}&page=1`
          ),
        ]);
        const data = await Promise.all(response.map((r) => r.json()));

        setMovieData(data[0].results.map((el) => createMovieObject(el)));
        setSeriesData(data[1].results.map((el) => createMovieObject(el)));
        dispatch(fetchGenreData());
        console.log(movieData, seriesData);
        console.log('fetched');
        // setGenreMovieData(data[2].genres);
        // setGenreSeriesData(data[3].genres);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <Theme>
      <HomeWrapper>
        <HomeHero
          title={`Don't stress out about what to watch.`}
          // title={'Every movie you could think of, in one place.'}
          subtitle={`You know those nights when you waste hours looking for the right
              movie to watch or the TV series to start? WTM solves the problem.`}>
          <CarouselWrapper>
            {status === 'loading' && <Spinner />}
            {status === 'idle' && (
              <>
                <CategoryCarousel
                  title={'Trending Movies'}
                  category={movieData}
                  genresArr={movieGenres.genres}
                  type='movie'
                />
                <CategoryCarousel
                  title={'Trending Series'}
                  category={seriesData}
                  genresArr={seriesGenres.genres}
                  type='tv'
                />
              </>
            )}
          </CarouselWrapper>
        </HomeHero>
      </HomeWrapper>
    </Theme>
  );
};

export default Home;
