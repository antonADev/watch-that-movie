import styled, { keyframes } from 'styled-components';

// const spin = keyframes`
// to {
//       -webkit-transform: rotate(360deg);
//     }
// `;

export const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${(props) => props.theme.colors.veryLight};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.colors.main};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
