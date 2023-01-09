import { useRef } from 'react';
import Theme from '../../Theme';
import {
  PeopleCarouselWrapper,
  PeopleCarouselCard,
  ImageContainer,
  InfoContainer,
} from './people-carousel.styles';
import { useIntersectionObserver } from '../../utils/hooks';
const PeopleCarousel = ({ imagePath, name, character }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { treshold: 1.0 });
  return (
    <Theme>
      <PeopleCarouselCard>
        <ImageContainer ref={ref}>
          <img src={isVisible ? `${imagePath}` : null} alt={`${name}`} />
        </ImageContainer>
        <InfoContainer>
          <h3>{name}</h3>
          <p>{character}</p>
        </InfoContainer>
      </PeopleCarouselCard>
    </Theme>
  );
};

export default PeopleCarousel;
