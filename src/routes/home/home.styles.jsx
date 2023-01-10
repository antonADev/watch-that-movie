import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 2rem 0 7rem;
  min-height: 600px;
  height: fit-content;
  @media ${(props) => props.theme.deviceMin.laptop} {
    gap: 5rem;
  }
  /* & > :not(:last-child) {
    margin: 10% 0 0 0;
  } */
  /* justify-content: center;
  align-items: center; */
`;
