import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const FormHeader = styled.h1`
  margin: 3rem 0;
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
