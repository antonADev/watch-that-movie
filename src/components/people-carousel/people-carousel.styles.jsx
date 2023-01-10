import styled from 'styled-components';

// import {PeopleCarouselWrapper, PeopleCarouselCard, ImageContainer, InfoContainer} from "./people-carousel.styles"

export const PeopleCarouselCard = styled.div`
  /* margin: 1rem; */
  /* min-height: 150px; */
  height: max-content;
  aspect-ratio: 2/3;
  max-width: 150px;
  min-width: 150px;
  width: 30vmin;
  height: 35vmax;
  min-height: 350px;
  max-height: 300px;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 0px 37px 8px rgba(189, 189, 189, 1);
  box-shadow: 0px 0px 10px 2px rgba(189, 189, 189, 0.5);
`;

export const ImageContainer = styled.div`
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  img {
    object-fit: cover;
    display: block;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    border-radius: 15px;
  }
`;

export const InfoContainer = styled.div`
  padding: 0.5rem;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  word-wrap: break-word;
  h3 {
    font-size: clamp(0.8rem, -0.875rem + 4.333vw, 1rem);
    color: ${(props) => props.theme.colors.main};
  }

  p {
    font-size: clamp(0.7rem, -0.875rem + 4.333vw, 0.8rem);
    color: ${(props) => props.theme.colors.lightGrey};
  }
`;
