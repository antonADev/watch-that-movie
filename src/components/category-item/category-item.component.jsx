import React from 'react';
import Theme from '../../Theme';

import {
  ImageWrapper,
  TextWrapper,
  GenreWrapper,
  GenrePara,
} from './category-item.styles';

import { DESKTOP_IMAGE_PATH, MOBILE_IMAGE_PATH } from '../../constants/global';

const CategoryItem = ({ title, year, backdrop, genres, onClick }) => {
  return (
    <Theme>
      <ImageWrapper
        onClick={onClick}
        background={`${
          window.innerWidth > 768 ? DESKTOP_IMAGE_PATH : MOBILE_IMAGE_PATH
        }${backdrop}`}>
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

export default CategoryItem;
