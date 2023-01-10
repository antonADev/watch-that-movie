import React from 'react';
import Theme from '../../Theme';
import {
  HomeHeroWrapper,
  ImageWrapper,
  Title,
  Subtitle,
  ChildrenContainer,
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
        <ChildrenContainer>{children}</ChildrenContainer>
      </HomeHeroWrapper>
    </Theme>
  );
};

export default HomeHero;
