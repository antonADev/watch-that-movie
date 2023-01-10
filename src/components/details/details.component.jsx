import React from 'react';
import { DataWrapper, CreditWrapper } from './details.styles';
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
