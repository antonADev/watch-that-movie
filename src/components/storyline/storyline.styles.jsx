import styled from 'styled-components';

export const StorylineWrapper = styled.div`
  min-height: 15vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: ${(props) => props.theme.colors.main};
`;

export const StorylineHeaderWrapper = styled.div`
  width: 100%;
`;

export const StorylineHeader = styled.h3`
  font-weight: 600;
  font-size: clamp(1.3rem, -0.875rem + 4.333vw, 1.6rem);
`;

export const StorylinePara = styled.div`
  font-size: clamp(1rem, -0.875rem + 4.333vw, 1.1rem);
  color: ${(props) => props.theme.colors.lightGrey};
`;
