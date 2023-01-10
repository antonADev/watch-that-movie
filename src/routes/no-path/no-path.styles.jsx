import styled from 'styled-components';

export const NoPathContainer = styled.div`
  height: 80vh;
`;

export const CountdownHeader = styled.h3`
  margin-top: 3rem;
  font-size: clamp(5rem, -0.875rem + 5.333vw, 10rem);
  color: ${(props) => props.theme.colors.main};
`;
