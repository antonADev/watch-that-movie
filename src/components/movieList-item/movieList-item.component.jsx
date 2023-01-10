import { useState, useRef, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { MOBILE_IMAGE_PATH, DESKTOP_IMAGE_PATH } from '../../constants/global';
import Theme from '../../Theme';
import { useIntersectionObserver } from '../../utils/hooks';

import { MovieListItemWrapper, ImageWrapper, TextWrapper } from './movieList-item.styles';
import noImage from '../../assets/no-img.png';
const MovieListItem = ({ poster, title, release, id }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { treshold: 0.5 });
  return (
    <>
      <Theme>
        <Link to={`${id}`}>
          <MovieListItemWrapper ref={ref} isVisible={isVisible ? 'visible' : 'hidden'}>
            <ImageWrapper background={isVisible ? `${MOBILE_IMAGE_PATH}${poster}` : `${noImage}`}>
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
