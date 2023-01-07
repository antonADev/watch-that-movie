import { useState, useRef, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { MOBILE_IMAGE_PATH, DESKTOP_IMAGE_PATH } from '../../constants/global';
import Theme from '../../Theme';
import { useIntersectionObserver } from '../../utils/hooks';

import {
  MovieListItemWrapper,
  ImageWrapper,
  TextWrapper,
} from './movieList-item.styles';

const MovieListItem = ({ poster, title, release, id }) => {
  // const [isVisible, setIsVisible] = useState(false);

  // const observer = useRef();
  // const lastProviderElementRef = useCallback((node) => {
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver((entries) => {
  //     entries.forEach((el) => {
  //       if (el.isIntersecting) {
  //         setIsVisible(true);
  //         console.log(el.intersectionRatio);
  //         observer.current.disconnect();
  //       } else {
  //         return;
  //       }
  //     });
  //   });
  //   if (node) observer.current.observe(node);
  // }, []);
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { treshold: 0.5 });
  return (
    <>
      <Theme>
        <Link to={`${id}`}>
          <MovieListItemWrapper
            ref={ref}
            isVisible={isVisible ? 'visible' : 'hidden'}>
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
