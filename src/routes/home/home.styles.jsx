import styled, { keyframes } from 'styled-components';

const comeIn = (props) => keyframes`
${props.theme.keyframes.comeIn}
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 100vw;
  animation: ${comeIn} 1s;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media ${(props) => props.theme.deviceMin.laptop} {
    gap: 5rem;
  }
  /* & > :not(:last-child) {
    margin: 10% 0 0 0;
  } */
  /* justify-content: center;
  align-items: center; */
`;
