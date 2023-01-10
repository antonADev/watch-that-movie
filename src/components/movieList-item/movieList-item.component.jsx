import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { MOBILE_IMAGE_PATH } from '../../constants/global';
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
            <ImageWrapper
              background={
                isVisible ? `${MOBILE_IMAGE_PATH}${poster}` : `${noImage}`
              }></ImageWrapper>
            <TextWrapper>
              <h3>{title}</h3>
              <p>{release}</p>
            </TextWrapper>
          </MovieListItemWrapper>
        </Link>
      </Theme>
    </>
  );
};

export default MovieListItem;
