import styled from 'styled-components';

// import {PeopleCarouselWrapper, PeopleCarouselCard, ImageContainer, InfoContainer} from "./people-carousel.styles"

export const PeopleCarouselCard = styled.div`
  /* margin: 1rem; */
  /* min-height: 150px; */
  height: max-content;
  width: 70px;
  border-radius: 25px;
`;

export const ImageContainer = styled.div`
  max-height: 50%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;

  img {
    display: block;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    border-radius: 15px;
  }
`;

export const InfoContainer = styled.div`
  h3 {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.main};
  }

  p {
    font-size: 0.7rem;
    color: #${(props) => props.theme.colors.lightGrey};
  }
`;
