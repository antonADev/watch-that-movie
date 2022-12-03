import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getLang } from '../../utils/helperFunctions';

import HomeHero from '../../components/home-hero/home-hero.component';
import CategoryCarousel from '../../components/category-carousel/category-carousel.component';
import Theme from '../../Theme';

import { HomeWrapper, MovieCarousel, CarouselWrapper } from './home.styles';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const data = {
  adult: false,
  backdrop_path: '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg',
  belongs_to_collection: {
    id: 751156,
    name: 'Hocus Pocus Collection',
    poster_path: '/1w8K4Dt3WOyCPpe94HY0rA9UXUj.jpg',
    backdrop_path: '/ep3u73OsN6PSxed9TFJnWqjwrdO.jpg',
  },
  budget: 30000000,
  genres: [
    { id: 14, name: 'Fantasy' },
    { id: 35, name: 'Commedia' },
    { id: 10751, name: 'Famiglia' },
  ],
  homepage: '',
  id: 642885,
  imdb_id: 'tt11909878',
  original_language: 'en',
  original_title: 'Hocus Pocus 2',
  overview:
    'Dopo 29 anni, la Candela dalla fiamma nera è stata accesa riportando in vita le sorelle del 17° secolo, che ora cercano vendetta. Toccherà a tre liceali impedire alle diaboliche streghe di scatenare di nuovo scompiglio su Salem prima dell’alba della vigilia di Ognissanti.',
  popularity: 984.99,
  poster_path: '/ejmMQggGCqTvKw0HbJkfj9qFWmR.jpg',
  production_companies: [
    {
      id: 2,
      logo_path: '/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
      name: 'Walt Disney Pictures',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2022-09-27',
  revenue: 0,
  runtime: 105,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'Le streghe son tornate',
  title: 'Hocus Pocus 2',
  video: false,
  vote_average: 7.539,
  vote_count: 1100,
};
const lang = getLang();
const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [genreMovieData, setGenreMovieData] = useState([]);
  const [genreSeriesData, setGenreSeriesData] = useState([]);

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
          fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${lang}`
          ),
          fetch(
            `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=${lang}`
          ),
        ]);
        const data = await Promise.all(response.map((r) => r.json()));

        setMovieData(data[0].results);
        setSeriesData(data[1].results);
        setGenreMovieData(data[2].genres);
        setGenreSeriesData(data[3].genres);
      } catch (error) {}

      // const movieFetch = await fetch(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      // );
      // const seriesFetch = await fetch(
      //   `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      // );

      // await Promise.all([movieFetch, seriesFetch]);
      // setMovieData(await movieFetch.json());
      // setSeriesData(await seriesFetch.json());
    };
    fetchData();
  }, []);
  console.log(genreMovieData, genreSeriesData);
  return (
    <Theme>
      <HomeWrapper>
        {/* <h1>WatchThatMovie</h1> */}
        <HomeHero>
          <CarouselWrapper>
            <CategoryCarousel
              title={'Trending Movies'}
              category={movieData}
              genresArr={genreMovieData}
            />
            <CategoryCarousel
              title={'Trending Series'}
              category={seriesData}
              genresArr={genreSeriesData}
            />
          </CarouselWrapper>
        </HomeHero>
      </HomeWrapper>
    </Theme>
  );
};

export default Home;
