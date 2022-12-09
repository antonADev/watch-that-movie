import styled from 'styled-components';

export const ProviderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  max-height: 200px;

  opacity: ${(props) => (props.isVisible === 'hidden' ? 0 : 1)};
  transform: translate(
    0,
    ${(props) => (props.isVisible === 'hidden' ? '100px' : '0')}
  );
  transition: all 1s;
  img {
    max-width: 50%;
    max-height: 50%;
    border-radius: 50px;
  }
`;
