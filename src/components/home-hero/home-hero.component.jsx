import React from 'react';
import Theme from '../../Theme';
import {
  HomeHeroWrapper,
  ImageWrapper,
  Title,
  Subtitle,
} from './home-hero.styles';

const HomeHero = ({ title, subtitle, children }) => {
  return (
    <Theme>
      <HomeHeroWrapper>
        <ImageWrapper>
          <header>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </header>
        </ImageWrapper>
        {children}
      </HomeHeroWrapper>
    </Theme>
  );
};

export default HomeHero;
