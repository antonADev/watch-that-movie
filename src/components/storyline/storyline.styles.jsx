import styled from 'styled-components';

export const StorylineWrapper = styled.div`
  min-height: 15vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: ${(props) => props.theme.colors.main};
`;

export const StorylineHeader = styled.div`
  font-weight: 600;
`;

export const StorylinePara = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.lightGrey};
`;
