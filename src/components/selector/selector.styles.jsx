import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  min-width: 7rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.main};
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.main};
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.3s ease;
  &:hover {
    background-color: hsl(263, 100%, 93%);
  }
`;

export const DropdownStyle = styled.div`
  position: absolute;
  top: 0;
  left: -34%;
  max-height: 20vmax;
  min-width: 12rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid ${(props) => props.theme.colors.main};
  transition: max-height 0.2s ease;
  overflow: scroll;
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}

  @media ${(props) => props.theme.deviceMin.tablet} {
    max-height: 10vmax;
  }
`;

export const DropdownItem = styled.div`
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.main};
  border-radius: 0.3rem;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      color: ${(props) => props.theme.colors.main};
      font-weight: 500;
    `}&:hover, :focus, :focus:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: #fafafa;
    outline: none;
  }
`;

export const Select = styled.select`
  background-color: yellow;
`;
