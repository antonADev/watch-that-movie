import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: ${(props) => props.theme.colors.white};
  border-radius: 25px 25px 0 0;
  height: inherit;
  width: 100%;
  background-color: ${(props) => props.theme.colors.main};
  margin: auto;

  /* align-items: center; */
`;

export const LogoContainer = styled.div`
  height: 30%;
  width: 30%;
`;
