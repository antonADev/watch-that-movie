import React from 'react';
import { MOBILE_IMAGE_PATH } from '../../constants/global';
import Theme from '../../Theme';

import { PosterWrapper } from './poster.styles';

const Poster = ({ poster }) => {
  return (
    <Theme>
      <>
        <PosterWrapper>
          <img src={`${MOBILE_IMAGE_PATH}${poster}`} alt='movie-poster' />
        </PosterWrapper>
      </>
    </Theme>
  );
};

export default Poster;
