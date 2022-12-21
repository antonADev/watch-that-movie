import styled from 'styled-components';

export const MovieListItemWrapper = styled.div`
  /* background: url(${(props) => props.background}) no-repeat center; */
  /* background-size: cover; */
  /* aspect-ratio: 5/7; */

  /* max-width: 180px;
  max-height: 350px;
  min-width: 120px;
  min-height: 180px;
  width: 30vmin;
  height: 35vmax;
  aspect-ratio: 2/3;
  display: flex;
  flex-direction: column;
  box-shadow: 1px;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  height: fit-content;
  width: fit-content;
  @media ${(props) => props.theme.deviceMin.tablet} {
    flex-direction: row;
    justify-content: flex-start;

    max-width: 50vw;
    width: 50vw;
    border-radius: 25px;
    max-height: 250px;
  } */

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
