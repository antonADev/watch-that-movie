import React from 'react';
import Theme from '../../Theme';

import {
  StorylineWrapper,
  StorylineHeaderWrapper,
  StorylineHeader,
  StorylinePara,
} from './storyline.styles';

const Storyline = ({ text }) => {
  return (
    <Theme>
      <StorylineWrapper>
        <StorylineHeaderWrapper>
          <StorylineHeader>Storyline</StorylineHeader>
        </StorylineHeaderWrapper>
        <StorylinePara>{text}</StorylinePara>
      </StorylineWrapper>
    </Theme>
  );
};

export default Storyline;
