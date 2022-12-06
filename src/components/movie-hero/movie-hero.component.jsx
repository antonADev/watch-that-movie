import React from 'react';
import Theme from '../../Theme';

import {
  ImageWrapper,
  TextWrapper,
  GenreWrapper,
  GenrePara,
} from './movie-hero.styles';

import noImage from '../../assets/no-img.png';

const MOBILE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w780';
const DESKTOP_IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

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

const MovieHero = ({ title, year, backdrop, genres }) => {
  return (
    <Theme>
      <ImageWrapper
        background={
          backdrop === 'null'
            ? `${noImage}`
            : `${
                window.innerWidth > 768 ? DESKTOP_IMAGE_PATH : MOBILE_IMAGE_PATH
              }${backdrop}`
        }>
        <TextWrapper>
          <h1>
            {title}
            <span>({year.slice(0, 4)})</span>
          </h1>
          <GenreWrapper>
            {genres
              .filter((el, i) => i < 3)
              .map((genre) => (
                <GenrePara key={genre.id}>{genre.name}</GenrePara>
              ))}
          </GenreWrapper>
        </TextWrapper>
      </ImageWrapper>
    </Theme>
  );
};

export default MovieHero;
