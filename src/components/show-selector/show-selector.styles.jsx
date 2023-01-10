import styled from 'styled-components';

export const ShowWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 500px;
  @media ${(props) => props.theme.deviceMin.tablet} {
    min-height: 800px;
  }
`;
