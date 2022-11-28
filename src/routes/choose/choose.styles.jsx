import styled, { keyframes } from 'styled-components';
import { ReactComponent as WaveBg } from '../../assets/wave.svg';
import img from '../../assets/blob.png';

const comeIn = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

export const ChooseWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  animation: ${comeIn} 1s;

  ::before {
    position: absolute;
    content: '';
    background: url(${img}) no-repeat center center/cover;
    opacity: 0.3;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Wave = styled(WaveBg)`
  z-index: -1;
  position: absolute;
  top: 10%;
  width: 2000px;
`;
