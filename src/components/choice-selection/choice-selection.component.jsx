import Theme from '../../Theme';

import {
  ChoiceSelectionWrapper,
  ChoiceSelectionHeader,
  ChoiceSelectionInnerWrapper,
} from './choice-selection.styles';

const ChoiceSelection = ({ title, children, size, justify }) => {
  return (
    <Theme>
      <ChoiceSelectionWrapper justify={justify} size={size}>
        <ChoiceSelectionHeader>{title}</ChoiceSelectionHeader>
        <ChoiceSelectionInnerWrapper>{children}</ChoiceSelectionInnerWrapper>
      </ChoiceSelectionWrapper>
    </Theme>
  );
};

export default ChoiceSelection;
