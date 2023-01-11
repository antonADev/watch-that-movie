import { useRef } from 'react';
import Theme from '../../Theme';
import { useIntersectionObserver } from '../../utils/hooks';
import {
  ImageWrapper,
  DetailLink,
  TextWrapper,
  GenreWrapper,
  GenrePara,
} from './category-item.styles';

import { DESKTOP_IMAGE_PATH, MOBILE_IMAGE_PATH } from '../../constants/global';

const CategoryItem = ({ title, year, backdrop, genres, onClick, id, type }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { treshold: 1 });
  return (
    <Theme>
      <DetailLink to={`${type}/${id}`}>
        <ImageWrapper
          ref={ref}
          onClick={onClick}
          background={
            isVisible
              ? window.innerWidth > 768
                ? `${DESKTOP_IMAGE_PATH}${backdrop}`
                : `${MOBILE_IMAGE_PATH}${backdrop}`
              : ``
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
      </DetailLink>
    </Theme>
  );
};

export default CategoryItem;
