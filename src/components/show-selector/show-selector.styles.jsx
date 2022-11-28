import styled from 'styled-components';
import img from '../../assets/blob.png';

export const ShowWrapper = styled.div`
  position: relative;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 
  ::before {
    position: absolute;
    content: '';
    background: url(${img}) no-repeat center center/cover;
    opacity: 0.3;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 80vh;
    z-index: -1;
  } */
`;
