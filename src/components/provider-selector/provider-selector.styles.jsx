import styled from 'styled-components';

export const ProviderSelectorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  align-items: center;
  min-width: 320px;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 25px;
  padding: 1rem;
  width: 80%;
  :focus,
  :active {
    border: 1px solid ${(props) => props.theme.colors.main};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: white;

  height: 100%;
  width: 280px;
  max-width: 280px;
  text-align: left;
`;

export const UnorderedList = styled.ul`
  position: absolute;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.main};
  max-height: 200px;
  min-width: 280px;
  width: 280px;
  overflow-y: scroll;
`;

export const SelectedList = styled.div`
  margin: 1rem;
`;
