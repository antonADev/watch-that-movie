import React from 'react';
import Theme from '../../Theme';

import {
  ImageWrapper,
  TextWrapper,
  GenreWrapper,
  GenrePara,
} from './category-item.styles';

const CategoryItem = ({ title, year, backdrop, genres, onClick }) => {
  return (
    <Theme>
      <ImageWrapper onClick={onClick} background={backdrop}>
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
