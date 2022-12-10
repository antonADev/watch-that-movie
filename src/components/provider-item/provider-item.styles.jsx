import styled from 'styled-components';

// export const UnorderedList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   /* max-width: 90px;
//   max-height: 90px; */
// `;
export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > * {
    margin: 0.5rem;
  }
  opacity: ${(props) => (props.isVisible === 'hidden' ? 0 : 1)};
  transform: ${(props) =>
    props.isVisible === 'hidden' ? 'translate(100px, 0px)' : ''};
  transition: all 0.5s;
  img {
    /* display: inline-block; */
    max-width: 40px;
    max-height: 40px;
    border-radius: 50px;
  }
`;
