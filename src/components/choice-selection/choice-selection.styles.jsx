import styled, { keyframes } from 'styled-components';

export const ChoiceSelectionWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? 'flex-start' : 'center')};
  align-items: center;
  min-height: ${(props) => (props.size === 'big' ? '300px' : '200px')};
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
