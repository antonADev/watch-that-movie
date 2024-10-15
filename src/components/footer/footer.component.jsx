import React from 'react';
import Theme from '../../Theme';
import { FooterWrapper, LogoContainer, CreditsContainer } from './footer.styles';
import TmdbLogo from '../../../public/TmdbLogo.svg';
const Footer = () => {
  return (
    <Theme>
      <FooterWrapper>
        <CreditsContainer>
          <h3>Portfolio Project</h3>
          <a href='https://github.com/antonADev' target='_blank' rel='noreferrer'>
            This is a non-commercial portfolio web app created by Antonio Aurello using ReactJS,
            JavaScript, StyledComponents and ReduxToolkit. This web app uses the TMDB API but is not
            endorsed or certified by TMDB.
          </a>
        </CreditsContainer>
        <LogoContainer>
          <h3>Powered by: </h3>
          <a href='https://www.themoviedb.org/' target='_blank' rel='noreferrer'>
            <TmdbLogo />
          </a>
        </LogoContainer>
      </FooterWrapper>
    </Theme>
  );
};

export default Footer;
