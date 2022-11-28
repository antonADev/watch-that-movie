import React from 'react';
import Theme from '../../Theme';
import { HomeHeroWrapper, ImageWrapper } from './home-hero.styles';

const HomeHero = ({ children }) => {
  return (
    <Theme>
      <HomeHeroWrapper>
        <ImageWrapper></ImageWrapper>
        {children}
      </HomeHeroWrapper>
    </Theme>
  );
};

export default HomeHero;
