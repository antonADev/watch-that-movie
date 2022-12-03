import React from 'react';
import Theme from '../../Theme';
import {
  HomeHeroWrapper,
  ImageWrapper,
  Title,
  Subtitle,
} from './home-hero.styles';

const HomeHero = ({ children }) => {
  return (
    <Theme>
      <HomeHeroWrapper>
        <ImageWrapper>
          <header>
            <Title>Every movie you could think of, in one place.</Title>
            <Subtitle>
              You know those nights when you waste hours looking for the right
              movie to watch or the TV series to start? WTM solves the problem.
            </Subtitle>
          </header>
        </ImageWrapper>
        {children}
      </HomeHeroWrapper>
    </Theme>
  );
};

export default HomeHero;
