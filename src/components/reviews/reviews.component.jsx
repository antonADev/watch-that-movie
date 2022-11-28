import React from 'react';

import ProgressCircle from '../progress-circle/progress-circle.component';

import { ReviewWrapper, ProgressWrapper } from './reviews.styles';

const Reviews = ({ vote, voteCount }) => {
  return (
    <>
      <ReviewWrapper>
        <ProgressWrapper>
          <ProgressCircle value={Math.round(vote * 10) / 10} maxValue={10} />
        </ProgressWrapper>
        <p>{voteCount} reviews</p>
      </ReviewWrapper>
    </>
  );
};

export default Reviews;
