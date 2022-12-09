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
            <span>({year?.slice(0, 4)})</span>
          </h1>
          <GenreWrapper>
            {genres
              ?.filter((el, i) => i < 3)
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
