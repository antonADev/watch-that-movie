import styled from 'styled-components';

export const CreditTextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 0.5rem;
`;

export const CreditPara = styled.p`
  text-align: left;
  font-size: clamp(0.8rem, 2vw, 1.2rem);

  span {
    font-weight: 700;
  }
`;
