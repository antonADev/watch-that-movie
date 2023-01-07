import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';
import Theme from '../../Theme';
const Spinner = () => {
  return (
    <Theme>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </Theme>
  );
};

export default Spinner;
