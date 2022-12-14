import React from 'react';

import { useFilter } from '../../utils/helperFunctions';

import Storyline from '../storyline/storyline.components';

import {
  DataWrapper,
  ReviewWrapper,
  ProgressWrapper,
  CreditWrapper,
  CreditTextWrapper,
  CreditPara,
  PosterWrapper,
} from './details.styles';

import { MOBILE_IMAGE_PATH, DESKTOP_IMAGE_PATH } from '../../constants/global';

import ProgressCircle from '../progress-circle/progress-circle.component';
import Theme from '../../Theme';
import Reviews from '../reviews/reviews.component';
import Credits from '../credits/credits.component';
import Poster from '../poster/poster.component';

const Details = ({ vote, voteCount, releaseDate, poster, crew }) => {
  return (
    <Theme>
      <DataWrapper>
        <Reviews vote={vote} voteCount={voteCount} />
        <CreditWrapper>
          <Credits releaseDate={releaseDate} crew={crew} />
          <Poster poster={poster} />
        </CreditWrapper>
      </DataWrapper>
    </Theme>
  );
};

export default Details;
