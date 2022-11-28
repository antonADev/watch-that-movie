import React from 'react';
import { MOBILE_IMAGE_PATH } from '../../constants/global';

import { PosterWrapper } from './poster.styles';


const Poster = ({poster}) => {
  return (
    <>
      <PosterWrapper>
        <img src={`${MOBILE_IMAGE_PATH}${poster}`} alt='movie-poster' />
      </PosterWrapper>
    </>
  );
};

export default Poster;
