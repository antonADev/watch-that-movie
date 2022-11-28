import styled from 'styled-components';

export const ChoiceSelectionWrapper = styled.div`
  /* background-color: ${(props) => props.theme.colors.light}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 80%;
  transition: all 0.5s;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0 8px 20px 0 ${(props) => props.theme.colors.veryLight};
`;

export const ChoiceSelectionHeader = styled.h2`
  margin-bottom: 1rem;
`;

export const ChoiceSelectionInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > * {
    margin: 0 0.5rem;
  }
`;
