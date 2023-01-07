import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: ${(props) => props.theme.colors.white};
  border-radius: 25px 25px 0 0;
  height: inherit;
  background-color: ${(props) => props.theme.colors.main};
  margin: auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.deviceMin.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
  /* position: fixed;
  bottom: 0; */
  /* align-items: center; */
`;

export const CreditsContainer = styled.div`
  max-width: 50%;
`;

export const LogoContainer = styled.div`
  max-width: 150px;
  height: 30%;
  width: 30%;
`;
