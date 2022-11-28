import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  height: 100vh;

  /* ::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    height: 33vmax;
    width: 100%;
    border-radius: 0px 0px 30px 30px;
    background-color: ${(props) => props.theme.colors.main};
    z-index: -1;

    
  } */
`;

export const MovieCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 2rem;
`;
