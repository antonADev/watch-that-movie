import React from 'react';
import ChoiceSelection from '../choice-selection/choice-selection.component';
import { ChoiceSummaryWrapper, ListItem } from './choice-summary.styles';
const ChoiceSummary = ({ title, elements }) => {
  return (
    <ChoiceSummaryWrapper>
      <ChoiceSelection title={title}>
        {elements.map((el) => (
          <ListItem key={el}>{el}</ListItem>
        ))}
      </ChoiceSelection>
    </ChoiceSummaryWrapper>
  );
};

export default ChoiceSummary;
