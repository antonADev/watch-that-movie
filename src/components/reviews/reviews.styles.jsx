import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.colors.main};
`;

export const ProgressWrapper = styled.div`
  height: 75px;
  width: 75px;
`;
