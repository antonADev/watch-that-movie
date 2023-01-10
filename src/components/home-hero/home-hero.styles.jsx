import styled from 'styled-components';

export const HomeHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[2]};
  position: relative;
  background-color: ${(props) => props.theme.colors.main};
  min-height: 300px;
  height: 20vmax;
  max-height: 600px;

  border-radius: 0 0 30px 30px;
  z-index: -1;
  overflow: hidden;
  ::after {
    content: '';
    position: absolute;
    top: -30%;
    right: -30%;
    background-color: ${(props) => props.theme.colors.light};
    height: calc(100vw - 30%);
    width: calc(100vw - 30%);
    border-radius: 50%;
    z-index: -1;
    /* transition: all 1s; */
  }

  @media ${(props) => props.theme.deviceMin.tablet} and (orientation: landscape) {
    min-height: 350px;
    height: 30vmax;
  }
  /* @media ${(props) => props.theme.deviceMin.laptop} {
    height: 20vmax;
  } */
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, -0.875rem + 5.333vw, 5rem);
`;

export const Subtitle = styled.h2`
  font-size: clamp(1rem, -0.875rem + 4.333vw, 2rem);
`;

export const ChildrenContainer = styled.div`
  height: fit-content;
`;
