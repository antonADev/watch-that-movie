import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  width: 100vw;
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

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  /* justify-content: center;
  align-items: center; */
`;
