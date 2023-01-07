import styled from 'styled-components';

export const MovieListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  min-width: 350px;
  width: 80vw;
  gap: 1rem;
  /* max-width: 80vw; */
  -webkit-box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);

  opacity: ${(props) => (props.isVisible === 'hidden' ? 0 : 1)};
  transform: ${(props) =>
    props.isVisible === 'hidden' ? 'translate(100px, 0px)' : ''};
  transition: all 0.5s;

  @media ${(props) => props.theme.deviceMin.tablet} {
    width: 40vw;
    max-width: 500px;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 25px 0 0 25px;
  min-width: 150px;

  height: 240px;
  background: url(${(props) => props.background}) no-repeat top;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  text-align: left;

  word-break: break-word;
  h3 {
    font-size: clamp(1.2rem, -0.875rem + 4.333vw, 1.5rem);
  }
`;
