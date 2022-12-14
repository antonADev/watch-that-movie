import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.colors.main};
  p {
    font-size: clamp(1rem, -0.875rem + 4.333vw, 1.4rem);
  }
  @media ${(props) => props.theme.deviceMin.tablet} {
    flex-direction: column;
    width: 40%;
  }
`;

export const ProgressWrapper = styled.div`
  height: 75px;
  width: 75px;

  @media ${(props) => props.theme.deviceMin.tablet} {
    margin-bottom: 2rem;
    height: 120px;
    width: 120px;
  }
`;
