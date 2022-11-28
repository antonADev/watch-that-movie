import React from 'react';
import Theme from '../../Theme';

import {
  ChoiceSelectionWrapper,
  ChoiceSelectionHeader,
  ChoiceSelectionInnerWrapper,
} from './choice-selection.styles';

const ChoiceSelection = ({ title, children }) => {
  return (
    <Theme>
      <ChoiceSelectionWrapper>
        <ChoiceSelectionHeader>{title}</ChoiceSelectionHeader>
        <ChoiceSelectionInnerWrapper>{children}</ChoiceSelectionInnerWrapper>
      </ChoiceSelectionWrapper>
    </Theme>
  );
};

export default ChoiceSelection;
