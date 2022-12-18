import styled from 'styled-components';

export const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.main};

  & > * {
    margin: 1rem;
  }

  @media ${(props) => props.theme.deviceMin.tablet} {
    flex-direction: row;
  }
`;

export const CreditWrapper = styled.div`
  min-height: 200px;
  height: 20vmax;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.deviceMin.tablet} {
    justify-content: space-around;
  }
`;
