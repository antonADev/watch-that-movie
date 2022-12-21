import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { MOBILE_IMAGE_PATH, DESKTOP_IMAGE_PATH } from '../../constants/global';
import Theme from '../../Theme';

import {
  MovieListItemWrapper,
  ImageWrapper,
  TextWrapper,
} from './movieList-item.styles';

const MovieListItem = ({ poster, title, release, id }) => {
  return (
    <>
      <Theme>
        <Link to={`${id}`}>
          <MovieListItemWrapper>
            <ImageWrapper background={`${MOBILE_IMAGE_PATH}${poster}`}>
              {/* <img src={`${MOBILE_IMAGE_PATH}${poster}`} alt='' /> */}
            </ImageWrapper>
            <TextWrapper>
              <h3>{title}</h3>
              <p>{release}</p>
            </TextWrapper>
          </MovieListItemWrapper>
        </Link>
      </Theme>
      {/* <DetailLink to={`${type}/${id}`}>
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
      </DetailLink> */}
    </>
  );
};

export default MovieListItem;
