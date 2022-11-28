import React from 'react';
import Theme from '../../Theme';

import {
  StorylineWrapper,
  StorylineHeader,
  StorylinePara,
} from './storyline.styles';

const Storyline = ({ text }) => {
  return (
    <Theme>
      <StorylineWrapper>
        <StorylineHeader>Storyline</StorylineHeader>
        <StorylinePara>{text}</StorylinePara>
      </StorylineWrapper>
    </Theme>
  );
};

export default Storyline;
