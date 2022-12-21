import React from 'react';
import Theme from '../../Theme';
import { FooterWrapper, LogoContainer } from './footer.styles';
import { ReactComponent as Logo } from '../../assets/tmdbLogo.svg';
const Footer = () => {
  return (
    <Theme>
      <FooterWrapper>
        I'm the footer
        <LogoContainer>
          <h3>Powered by: </h3>
          <Logo />
        </LogoContainer>
      </FooterWrapper>
    </Theme>
  );
};

export default Footer;
