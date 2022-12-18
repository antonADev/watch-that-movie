import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #8c7aa2;
`;

export const MovieHeroWrapper = styled.div`
  /* overflow: hidden;
  position: relative; */
  /* height: 30vh; */
  /* height: 30vmax;
  max-height: 700px; */
`;

export const MovieDataWrapper = styled.div`
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  & > * {
    margin: 2rem 0;
  }
`;

export const ProfileCarousel = styled.div`
  height: auto;
  width: 100%;
  display: flex;

  overflow-x: scroll;
  & > * {
    margin: 1rem 0.5rem 1rem 1rem;
  }

  & > :first-child {
    margin: 1rem 0.5rem 1rem 0;
  }
`;
