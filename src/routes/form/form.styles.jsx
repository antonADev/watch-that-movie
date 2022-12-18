import styled from 'styled-components';
import img from '../../assets/blob.png';
export const FormWrapper = styled.div`
  position: relative;
  width: 100vw;
  margin-bottom: 2rem;
  /* ::before {
    position: absolute;
    content: '';
    background: url(${img}) no-repeat center center/cover;
    opacity: 0.3;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  } */
`;

export const ButtonWrapper = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 1rem;
  }
`;
