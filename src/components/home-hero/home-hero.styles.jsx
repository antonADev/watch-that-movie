import styled from 'styled-components';

export const HomeHeroWrapper = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  position: absolute;
  height: 33vmax;
  width: 100%;
  border-radius: 0 0 30px 30px;
  z-index: -1;
  ::after {
    content: '';
    position: absolute;
    top: -30%;
    right: -30%;
    background-color: ${(props) => props.theme.colors.light};
    height: 300px;
    width: 300px;
    border-radius: 50%;
    z-index: 1;
    transition: all 1s;
  }
`;
