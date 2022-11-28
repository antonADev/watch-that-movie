import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #8c7aa2;
`;

export const MovieHeroWrapper = styled.div`
  overflow: hidden;
  position: relative;
  /* min-height: 32vh; */
  height: 32vmax;
`;

export const MovieDataWrapper = styled.div`
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
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
