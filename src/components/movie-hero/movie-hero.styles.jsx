import styled from 'styled-components';
export const ImageWrapper = styled.div`
  position: relative;
  height: 20vmax;
  min-height: 300px;
  max-height: 600px;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ::after {
    content: '';
    background: url(${(props) => props.background}) no-repeat top;
    background-size: cover;
    position: absolute;
    top: 0;

    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 1s;
  }

  @media (hover: hover) {
    &:hover::after {
      transform: scale(1.05);
    }
  }
  @media ${(props) => props.theme.deviceMin.tablet} and (orientation: landscape) {
    min-height: 350px;
    height: 30vmax;
  }
  /* @media ${(props) => props.theme.deviceMin.tablet} {
    min-height: 300px;
    height: 30vmax;
  } */
`;

export const TrailerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(hsl(0 0% 0% / 0), hsl(20 0% 0% / 0.3) 20%, hsl(0 0% 0% / 1));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const TextWrapper = styled.div`
  padding: 0 2rem 0 1rem;
  height: fit-content;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: clamp(1.4rem, -0.875rem + 4.333vw, 3.5rem);
    font-weight: 600;
    span {
      color: gray;
      font-size: clamp(0.9rem, -0.875rem + 4.333vw, 1.8rem);
      font-weight: 400;
    }
  }
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.white};
  font-size: 3.5rem;
`;

export const CloseButton = styled(PlayButton)`
  position: absolute;

  z-index: 99;
  bottom: 0;
  left: 0;
`;

export const GenreWrapper = styled.div`
  padding: 0 2rem 2rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  & > *:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const GenrePara = styled.p`
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 25px;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.1rem 0.7rem;
`;
