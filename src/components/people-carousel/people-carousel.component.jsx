import React from 'react';
import Theme from '../../Theme';
import {
  PeopleCarouselWrapper,
  PeopleCarouselCard,
  ImageContainer,
  InfoContainer,
} from './people-carousel.styles';

const PeopleCarousel = ({ imagePath, name, character }) => {
  return (
    <Theme>
      <PeopleCarouselCard>
        <ImageContainer>
          <img src={`${imagePath}`} alt={`${name}`} />
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
