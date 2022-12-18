import styled from 'styled-components';

export const BaseButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.veryLight : props.theme.colors.main};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}px` : '165px')};
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.disabled ? props.theme.colors.veryLight : 'transparent'};
      color: ${(props) =>
        props.disabled ? props.theme.colors.white : props.theme.colors.main};

      ${(props) => (props.disabled ? '' : 'border: 1px solid #8f44fd')};
    }
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.isActive ? `${(props) => props.theme.colors.main}` : 'white'};
  color: ${(props) =>
    props.isActive ? 'white' : `${props.theme.colors.main}`};
  border: 1px solid ${(props) => props.theme.colors.main};

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.veryLight};

      border: 1px solid ${(props) => props.theme.colors.main};
    }
  }
`;
