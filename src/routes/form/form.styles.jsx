import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonWrapper = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 1rem;
  }
`;
